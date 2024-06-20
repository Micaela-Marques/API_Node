
exports.up = knex => knex.schema.createTable("Movies", table => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.integer("user_id").references("id").inTable("users");
    table.decimal("rating", 3, 2);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable("Filmes");