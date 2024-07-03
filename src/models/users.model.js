const db = require("../../config/db");
const bcrypt = require("bcrypt");

const addUserToDatabase = async (id, email, password) => {
  // add regex
  try {
    if (typeof id !== "string" || id === "") {
      throw new Error("Invalid id format");
    }

    if (typeof email !== "string" || email === "") {
      throw new Error("Invalid email format");
    }

    if (typeof password !== "string" || password === "") {
      throw new Error("Invalid password format");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [rows] = await db
      .promise()
      .query(`INSERT INTO users (id, email, password) VALUES (?, ?, ?);`, [
        id,
        email,
        `${hashedPassword}`,
      ]);

    console.log(`Successfully added to the database: `, email);

    return rows;
  } catch (err) {
    console.error("Error adding user to database", err);
    throw new Error("Failed adding users");
  }
};

const findUserInDatabase = async (email, password) => {
  try {
    if (typeof email !== "string" || email === "") {
      throw new Error("Invalid email format");
    }

    if (typeof password !== "string" || password === "") {
      throw new Error("Invalid password format");
    }

    /*
      SQL injection:
      1. `anything" OR "1"="1` |  protected
    */

    const [row] = await db
      .promise()
      .query(`SELECT * FROM users WHERE email = ?`, [email]);

    if (row[0].length === 0) {
      throw new Error("User doesn't exist");
    }

    // Hash password
    const user = row[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    return user;
  } catch (err) {
    console.error("Error searching user in database", err);
    throw new Error("Failed to search for the user");
  }
};

module.exports = { addUserToDatabase, findUserInDatabase };
