var router = function(app) {
  app.get("/", function(req, res) {
      res.send("Hello World");
  });

}

module.exports = router;
