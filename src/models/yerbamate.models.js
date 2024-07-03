// const uuid = require("uuid");
const db = require("../../config/db");

/**
 @param {String | Array<String> | null} rows  Query used to execute processes in yerbamate database
 */

const findAllYerbamate = async () => {
  try {
    const [rows] = await db.promise().query(`SELECT * FROM yerbamate`);

    if (rows.lenth < 0) {
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

module.exports = { findAllYerbamate };
