const db = require("../../config/db");
const bcrypt = require("bcrypt");

const addUserToDatabase = async (id, email, password, role) => {
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

    if (typeof role !== "string" || role === "") {
      throw new Error("Invalid roles format");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [rows] = await db
      .promise()
      .query(
        `INSERT INTO users (id, email, password, role) VALUES (?, ?, ?, ?);`,
        [id, email, `${hashedPassword}`, role],
      );

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

    if (row.length === 0) {
      throw new Error("User doesn't exist");
    }

    const isMatch = await bcrypt.compare(password, row[0].password);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    return row;
  } catch (err) {
    console.error("Error searching user in database", err);
    throw new Error("Failed to search for the user");
  }
};

module.exports = { addUserToDatabase, findUserInDatabase };
