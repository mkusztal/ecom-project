const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const db_port = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: db_port,
});

(async () => {
  try {
    const connection = await pool.promise().getConnection();
    console.log("Connected to the database successfully!");
    connection.release();
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
})();

module.exports.pool;
