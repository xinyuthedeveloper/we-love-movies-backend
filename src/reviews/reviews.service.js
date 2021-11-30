const knex = require("../db/connection");

function update(updateBody ,review_id) {
    return knex("reviews")
        .select("*")
        .where({ review_id })
        .update(updateBody);
}

function read(review_id) {
    return knex("reviews")
        .select("*")
        .where({ review_id })
        .first();
}

module.exports = {
    update,
    read,
}