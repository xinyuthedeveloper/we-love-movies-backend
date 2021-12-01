
exports.up = function(knex) {
    return knex.schema.createTable("movies_theaters", (table) => {
        table.boolean("is_showing");
        table.integer("theater_id").unsigned().notNullable();
        table.integer("movie_id").unsigned().notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
        table
            .foreign("theater_id")
            .references("theater_id")
            .inTable("theaters")
            .onDelete("cascade");
        table
            .foreign("movie_id")
            .references("movie_id")
            .inTable("movies")
            .onDelete("cascade");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("movies_theaters");
};
