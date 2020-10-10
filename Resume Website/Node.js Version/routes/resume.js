const express = require('express'),
      router = express.Router(),
      passport = require('passport');


router.get("/", (req,res) => {
    res.render("resume");
});

module.exports = router;