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

    // const yerbamate = rows.map((row) => ({
    //   id: row.id,
    //   name: row.name,
    //   size: row.size,
    //   price: row.price,
    //   commission: row.commission,
    //   image: row.image
    // }));

    return rows;
  } catch (err) {
    console.error("Error fetching yerba mate:", err);
    throw new Error("Failed to fetch yerba mate");
  }
};

module.exports = { findAllYerbamate };
