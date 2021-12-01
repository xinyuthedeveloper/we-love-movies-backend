const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritic = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});

function read(review_id) {
    return knex("reviews")
        .select("*")
        .where({ review_id })
        .first();
}

function update(reviewId, updatedReview) {
    return knex("reviews")
      .where({ review_id: reviewId })
      .update(updatedReview, "*");
}
  
function readUpdatedReview(review_id) {
    return knex("reviews as r")
      .join("critics as c", "r.critic_id", "c.critic_id")
      .select("*")
      .where({ review_id })
      .first()
      .then((result) => {
        const updatedReview = addCritic(result);
        const { critic_id } = updatedReview.critic;
        return {...updatedReview, critic_id }
      });
}

function destory(review_id) {
    return knex("reviews")
    .where({ review_id })
    .del();
}

module.exports = {
    read,
    update,
    readUpdatedReview,
    destory,
}