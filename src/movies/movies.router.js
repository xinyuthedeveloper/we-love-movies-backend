const router = require("express").Router({ mergeParams: true });
const MethodNotAllowed = require("../errors/MethodNotAllowed");
const controller = require("./movies.controller");

router.route("/")
    .get(controller.list)
    .all(MethodNotAllowed);

router.route("/:movieId")
    .get(controller.read)
    .all(MethodNotAllowed);

module.exports = router;