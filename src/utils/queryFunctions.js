const { pool } = require("../models/pool");
const {
  insertMessages,
  createMessageTable,
  dropMessagesTable,
} = require("./queries");

const executeQueryArray = async (arr) =>
  new Promise((resolve) => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
      await pool.query(q);
      if (index + 1 === stop) resolve();
    });
  });

exports.dropTables = () => executeQueryArray([dropMessagesTable]);
exports.createTables = () => executeQueryArray([createMessageTable]);
exports.insertIntoTables = () => executeQueryArray([insertMessages]);
