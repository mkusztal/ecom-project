const uuid = require("uuid");
const db = require("../../config/db");

/**
 @param {String | Array<String> | null} rows  Query used to execute processes in clothes database
 */

const findAllClothes = async () => {
  try {
    const [rows] = await db.promise().query(`SELECT * FROM clothes`);

    if (rows.lenth < 0) {
      throw new Error("Database is empty!");
    }

    const clothes = rows.map((row) => ({
      id: row.id,
      name: row.name,
      size: row.size,
      price: row.price,
      commission: row.commission,
    }));

    return clothes;
  } catch (err) {
    console.error("Error fetching clothes:", err);
    throw new Error("Failed to fetch clothes");
  }
};

module.exports = { findAllClothes };
