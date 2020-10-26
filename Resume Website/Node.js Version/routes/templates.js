const express               = require('express'),
      router                = express.Router(),
      middleware            = require('../middleware/index');


router.get('/', middleware.isLoggedIn, (req,res) => {
        res.render("templates/index");
});




module.exports = router;