
"use strict";

const errorHandler = (error, req, res, next) => {
  console.log(error)
  res.status(error.code || 500).send({
    msg: error.msg || "Internal Server Error",
  });
};

module.exports = errorHandler;