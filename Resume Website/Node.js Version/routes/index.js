const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      User = require('../models/user');


//Landing Page Route      
router.get("/", (req,res) => {
    res.render("index");
});

//Register Form Route
router.get("/register", (req,res) =>{
    if(req.user){
        return res.redirect("/");
    }
    console.
    res.render("register")
});


//Register Form POST Route
router.post("/register", (req, res) => {
    const newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req,res, () => {
            req.flash("success", "Welcome to my resume website " + user.username);
            res.redirect("/");
        });
    });
});

//User login Route
router.get("/login", (req, res) => {
    if(req.user){
        return res.redirect("/");
    }
    res.render("login");
})

//User Login POST Route
router.post("/login", passport.authenticate("local", 
    {
        failureRedirect: "/login",
        failureFlash: true
    }), (req,res) => {
        req.session.username = req.user.username;
        // res.cookie("username", req.user.username);
        res.redirect("/");
            
});


//User Logout Route
router.get("/logout", (req,res) => {
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/");
});




module.exports = router;