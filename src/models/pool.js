const { Pool } = require("pg");
const dotenv = require("dotenv");
const { connectionString } = require("../settings");

dotenv.config();

exports.pool = new Pool({ connectionString });
