const validateBody = (schema) => {
  const func = (req, res, next) => {
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

  return func;
};

module.exports = validateBody;
