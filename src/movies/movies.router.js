const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");

router.route("/")
    .get(controller.list)

module.exports = router;