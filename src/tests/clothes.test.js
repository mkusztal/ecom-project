const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

process.env.NODE_ENV = "test";
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);
/**
 * @param {} server adsad
 */

describe("/clothes tests", () => {
  it("should return all clothes from database", (done) => {
    chai
      .request(server)
      .get("/api/clothes")
      .end((err, res) => {
        if (res.body === null) {
          throw new Error("Response body is null ");
        }
        res.should.have.status(200);
        res.body.should.be.a("object").that.has.property("clothes");
        res.body.clothes.should.be.an("array");
        const allClothes = res.body;
        expect(allClothes);
        done();
      });
  });
});
