const express                = require('express'),
      router                 = express.Router(),
      middleware             = require('../middleware/index'),
      passport               = require('passport'),
      User                  = require('../models/user');


//Landing Page Route      
router.get("/", (req,res) => {
    //Render index page.
    res.render("index",{
            session: req.session
    });
});



//Register Form Route
router.get("/register", (req,res) =>{
    //If there is a current logged in user. Redirect to index page
    if(req.user){
        return res.redirect("/");
    //Else render register form page
    }else{
        return res.render("register");
    }
});


//Register Form POST Route
router.post("/register", async (req, res) => {
    const newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
            passport.authenticate("local")(req,res, () => {
                req.flash("success", "Welcome to my resume website " + user.username);
                console.log("Current session information");
                console.log(req.session);
               
                res.redirect("/");
        });
    });
});



//User login Route
router.get("/login", (req, res) => {
    //If there is a current logged in user. Redirect to index page
    if(req.user){
        return res.redirect("/");
    //else render login form page.
    }else{
        return res.render("login");
    }
})



//User Login POST Route
router.post("/login", passport.authenticate("local", 
    {
        //Athentication failure - redirect to login form.
        failureRedirect: "/login",
        //Failure flash.
        failureFlash: true
    }), (req,res) => {
    return res.redirect("/");    
});

//User Logout Route
router.get("/logout", (req,res) => {
    //Logout out user from current passport session
    req.logout();
    //Flash success message on logout.
    req.flash("success", "Logged you out!");
    //redirect to landing index page
    res.redirect("/");
});

//Export router
module.exports = router;