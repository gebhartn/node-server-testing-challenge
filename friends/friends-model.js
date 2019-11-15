const db = require("../data/db-config");

const insert = async friend => {
  return db("friends").insert(friend, "id");
};

const update = async (id, changes) => {
  return null;
};

const remove = id => {
  return null;
};

const find = () => {
  return db("friends");
};

const findById = id => {
  return null;
};
