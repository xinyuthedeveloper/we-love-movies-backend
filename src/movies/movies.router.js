const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");

router.route("/")
    .get(controller.list);

router.route("/:movieId")
    .get(controller.read);

module.exports = router;