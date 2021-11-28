const service = require("./movies.service");

async function list(req, res, next) {
    const { is_showing } = req.query;
    const data = is_showing ? await service.listShowing() : await service.list();
    res.json({ data })
}

async function movieExists(req, res, next) {
    const { movieId } = req.params;
    const movie = await service.read(movieId);
    if (movie) {
        res.locals.movie = movie;
        return next();
    }
    next({ status:404, message: `movie_id: ${movieId} not found.`});
}

async function read(req, res) {
    res.json({ data: res.locals.movie });
}


module.exports = {
    list,
    read: [movieExists, read],
}