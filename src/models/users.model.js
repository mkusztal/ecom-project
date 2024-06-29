const db = require("../../config/db");
// const bcrypt = require("bcrypt");

const addUserToDatabase = async (id, email, password) => {
  // add regex
  try {
    if (typeof id !== "string" || id === "") {
      throw new Error("Id is not string or is empty");
    }

    if (typeof email !== "string" || email === "") {
      throw new Error("Email is not string or is empty");
    }

    if (typeof password !== "string" || password === "") {
      throw new Error("Password is not string or is empty");
    }

    const [rows] = await db
      .promise()
      .query(
        `INSERT INTO users (id, email, password) VALUES ('${id}', '${email}', '${password}');`,
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
      throw new Error("email is not string or is empty");
    }

    if (typeof password !== "string" || password === "") {
      throw new Error("password is not string or is empty");
    }

    const row = await db
      .promise()
      .query(
        `SELECT * FROM users WHERE email="${email}" AND password="${password}"`,
      );

    if (row[0].length === 0) {
      throw new Error("User doesn't exist");
    }

    return row[0];
  } catch (err) {
    console.error("Error searching user in database", err);
    throw new Error("Failed searching a user");
  }
};

module.exports = { addUserToDatabase, findUserInDatabase };
