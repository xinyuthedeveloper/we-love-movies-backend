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

function destory(review_id) {
    return knex("reviews")
    .where({ review_id })
    .del();
}

module.exports = {
    update,
    read,
    destory,
}