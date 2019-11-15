exports.seed = function(knex) {
  return knex("friends")
    .truncate()
    .then(() => {
      return knex("friends").insert([
        { name: "kevin" },
        { name: "tony" },
        { name: "dakotah" }
      ]);
    });
};
