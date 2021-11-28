const service = require("./movies.service");

async function list(req, res, next) {
    const { is_showing } = req.query;
    const data = is_showing ? await service.listShowing() : await service.list();
    res.json({ data })
}


module.exports = {
    list,
}