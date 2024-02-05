const validateBody = (schema) => {
  const fun = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({
          message:
            "Body must have at least one field",
        });
    }
    next();
  };

  return fun;
};

module.exports = validateBody;
