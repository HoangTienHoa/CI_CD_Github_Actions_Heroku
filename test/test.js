const request = require("supertest");
const app = require("../index");
describe("GET /", () => {
    it("respond with Hello World Github Action + Heroku", (done) => {
        request(app).get("/").expect("Hello World Github Action + Heroku", done);
    })
});