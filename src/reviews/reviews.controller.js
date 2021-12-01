const service = require("./reviews.service");

async function read(req, res) {
    const { reviewId } = req.params;
    const data = await service.read(reviewId);
    res.json({ data });
}

async function reviewExists(req, res, next) {
    const { reviewId } = req.params;
    const review = await service.read(reviewId);
    if (review) {
        res.locals.review = review;
        return next();
    }
    next({ status: 404, message: `/cannot be found/${reviewId}` });
}

async function update(req, res) {
    const { reviewId } = req.params;
    const { data } = req.body;
    await service.update(data, reviewId);
    const updatedRecord = await service.read();
    res.json({ data: updatedRecord });
}

async function destory(req, res) {
    const { reviewId } = req.params;
    await service.destory(reviewId);
    res.sendStatus(204);
}

module.exports = {
    read: [reviewExists, read],
    update: [reviewExists],
    delete: [reviewExists, destory,]
}