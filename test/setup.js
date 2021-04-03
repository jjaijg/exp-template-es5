const supertest = require("supertest");
const chai = require("chai");
const sinonChai = require("sinon-chai");
const app = require("../src/app");

chai.use(sinonChai);
exports.expect = chai.expect;
exports.server = supertest.agent(app);
exports.BASE_URL = "/v1";
