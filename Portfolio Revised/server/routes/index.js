const express                = require('express'),
      router                 = express.Router();


router.get("/", (req,res) => {
    //Render index page.
    res.render("index");
});


router.get('/hello', (req,res) => {
    res.send("Hello");
})

module.exports = router;