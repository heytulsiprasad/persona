// Not found middleware
// 404

const notFound = (req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);

	// pass error to the next middleware
	next(error);
};

// When not 404
// General server run time errors

const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === "production" ? "Error Occured" : err.stack,
	});
};

module.exports = { notFound, errorHandler };
