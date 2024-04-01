const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const pool = require("../../config/db");

process.env.NODE_ENV = "test";
const expect = chai.expect;

chai.use(chaiHttp);
/**
 * @param {} server adsad
 */

describe("/clothes tests", () => {
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

  it("should return all clothes from database", (done) => {
    chai
      .request(server)
      .get("/api/clothe")
      .end((err, res) => {
        if (err) {
          done();
        }
        expect(res).to.have.status(200);
        expect(res.body).to.be.a("object").that.has.property("clothes");
        expect(res.body.clothes).to.be.an("array");
        const allClothes = res.body;
        expect(allClothes);
        done();
      });
  });
});
