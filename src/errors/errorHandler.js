//Error handler with default error code and message

function errorHandler(err, req, res, next) {
    const { status = 500, message = "Something went wrong!" } = err;
    res.status(status).json({ error: message });
}

module.exports = errorHandler;