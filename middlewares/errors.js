
function errorHandler(err, req, res, next) {
  if (typeof err === "string") {
    return res.status(400).json({ message: err });
  }

  if (typeof err === "validationError") {
    return res.status(400).json({ message: err });
  }

  if (typeof err === "unauthorizedError") {
    return res.status(401).json({ message: err });
  }

  return res.status(500).json({ message: err });
}
module.exports = {
  errorHandler,
};
