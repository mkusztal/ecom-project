// const uuid = require("uuid");
const db = require("../../config/db");

/**
 @param {String | Array<String> | null} rows  Query used to execute processes in yerbamate database
 */

const findAllYerbamate = async () => {
  try {
    const [rows] = await db.promise().query(`SELECT * FROM yerbamate`);

    if (rows.lenth === 0) {
      throw new Error("Database is empty!");
    }

    const yerbamateData = rows.map((row) => ({
      ...row,
      image: Buffer.from(row.image).toString("base64"),
    }));

    return yerbamateData;
  } catch (err) {
    console.error("Error fetching yerba mate:", err);
    throw new Error("Failed to fetch yerba mate");
  }
};

const getOneProduct = async (id) => {
  try {
    const [row] = await db
      .promise()
      .query(`SELECT * FROM yerbamate WHERE id = ?`, [id]); //${id}`); //, []);

    if (row.length === 0) {
      throw new Error("Database is empty!");
    }

    return row[0];
  } catch (err) {
    console.error("Error fetching product: ", err);
    throw new Error("Failed to fetch product");
  }
};

const addProductToDatabase = async (
  id,
  name,
  size,
  price,
  commission,
  image,
  type,
) => {
  try {
    if (typeof id !== "string" || id === "") {
      throw new Error("Invalid id format");
    }

    if (typeof name !== "string" || name === "") {
      throw new Error("Invalid name format");
    }

    if (typeof size !== "number" || size <= 0) {
      throw new Error("Invalid size format");
    }

    if (typeof price !== "number" || price <= 0) {
      throw new Error("Invalid price format");
    }

    if (typeof commission !== "number" || commission < 0) {
      throw new Error("Invalid commission format");
    }

    if (typeof type !== "string" || type === "") {
      throw new Error("Invalid type format");
    }

    if (!Buffer.isBuffer(image)) {
      throw new Error("Invalid image format");
    }

    const [rows] = await db
      .promise()
      .query(
        `INSERT INTO yerbamate (id, name, size, price, commission, image, type) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [id, name, size, price, commission, image, type],
      );

    console.log("Successfully added product to the database: ", rows);
    return rows;
  } catch (err) {
    console.error("Error adding product:", err);
    throw new Error("Failed to adding product");
  }
};

module.exports = { findAllYerbamate, getOneProduct, addProductToDatabase };
