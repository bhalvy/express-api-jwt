"use strict";

const test = require("tape");
const request = require("supertest");
const app = require("../app");

test("Ping Pong!", function(t) {
    request(app)
        .get('/api/ping')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(((err, res) => {
            const expected = 'pong!'
            t.error(err, 'No error');
            t.same(res.body, expected, 'It Works!');
            t.end()
        }));
});

test.onFinish(() => process.exit(0));
