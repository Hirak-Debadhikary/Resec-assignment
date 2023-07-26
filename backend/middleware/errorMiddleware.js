const notFound = (req, res, next) => {
  const error = new NotFoundError(`Not Found - ${req.originalUrl}`);
  res.status(error.statusCode).json({
    message: error.message,
  });
};

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  console.error(err);
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
