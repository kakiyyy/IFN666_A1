module.exports = (req, res, next) => {
    const methodsWithBody = ["POST", "PUT", "PATCH"];
  
    if (methodsWithBody.includes(req.method)) {
      if (!req.is("application/json")) {
        return res.sendStatus(415);
      }
    }
  
    next();
  };