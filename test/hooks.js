const {
  dropTables,
  createTables,
  insertIntoTables,
} = require("../src/utils/queryFunctions");

before(async () => {
  await createTables();
  await insertIntoTables();
});

after(async () => {
  await dropTables();
});
