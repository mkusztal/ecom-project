const chai = require("chai");
const chaiHttp = require("chai-http");
// const server = require("../app");
const pool = require("../../config/db");
// const { connect } = require("../routes/yerbamate.routes");

process.env.NODE_ENV = "test";
// const expect = chai.expect;

chai.use(chaiHttp);

describe("/Registration test", () => {
  before((done) => {
    pool.getConnection((err, connection) => {
      if (err) {
        done(err);
      }

      console.log("Connected with database...");
      connection.release();
      done();
    });
  });

  // it("should add the user to the database", (done) => {
  //   // chai.request("/api/registration");
  // });

  // it("should add the user to the database", (done) => {
  //   chai.request("/api/registration");
  // });
});
