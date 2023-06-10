const imagesFormatter = (req, res, next) => {
  try {
    const result = req.files;
    req.body.images = result.map((img) => img.path);
  } catch (error) {
    next(error);
  }
  next();
};

module.exports = imagesFormatter;
