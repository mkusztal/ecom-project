const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const pool = require("../../config/db"); // Correct import of pool

process.env.NODE_ENV = "test";
const expect = chai.expect;

chai.use(chaiHttp);

describe("/yerbamate tests", () => {
  before(async () => {
    try {
      const res = await pool.query("SELECT NOW()");
      console.log("Database connection successful:", res.rows[0]);
    } catch (err) {
      console.error("Failed to connect to the database:", err);
      throw err;
    }
  });

  it("should return all yerbamate from database", (done) => {
    chai
      .request(server)
      .get("/api/yerbamate")
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res).to.have.status(200);
        expect(res.body).to.be.a("array");
        done();
      });
  });
});
