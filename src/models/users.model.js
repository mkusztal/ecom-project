const db = require("../../config/db");
const bcrypt = require("bcrypt");

const addUserToDatabase = async (user_id, user_email, user_password) => {
  // add regex
  try {
    if (typeof user_id !== "string" || user_id === "") {
      throw new Error("Id is not string or is empty");
    }

    if (typeof user_email !== "string" || user_email === "") {
      throw new Error("Email is not string or is empty");
    }

    if (typeof user_password !== "string" || user_password === "") {
      throw new Error("Password is not string or is empty");
    }

    const [rows] = await db
      .promise()
      .query(
        `INSERT INTO users (id, email, password) VALUES ('${user_id}', '${user_email}', '${user_password}');`,
      );

    console.log(`Successfully added to the database: `, user_email);

    return rows;
  } catch (err) {
    console.error("Error adding user to database", err);
    throw new Error("Failed adding users");
  }
};

const findUserInDatabase = async (user_email, user_password) => {
  try {
    if (typeof user_email !== "string" || user_email === "") {
      throw new Error("email is not string or is empty");
    }

    if (typeof user_password !== "string" || user_password === "") {
      throw new Error("password is not string or is empty");
    }

    const row = await db
      .promise()
      .query(
        `SELECT * FROM users WHERE email="${user_email}" AND password="${user_password}"`,
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
