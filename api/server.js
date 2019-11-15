const express = require("express");
const Friends = require("../friends/friends-model");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h3>Hello World</h3>");
});

module.exports = server;
