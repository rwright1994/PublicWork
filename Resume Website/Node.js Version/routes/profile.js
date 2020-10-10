const express = require('express'),
      router = express.Router(),
      User = require('../models/user');



//RESTFUL Profile Index Route
router.get("/:id", (req,res) => {
    User.findById(req.params.id).populate("user").exec( (err, foundUser) => {
        if(err || !foundUser){
            req.flash("error", "User not found.");
            res.redirect("back");
        }else{
            // console.log(req.session.username + " came from mongodb.");
            res.render("profile", {
                                    foundUser: foundUser,
                                    username:  req.session.username,
                                });
        }
    });
});

//RESTFUL Profile edit route
router.get("/:id/edit/personal_info", (req,res) => {
    User.findById(req.params.id).populate("user").exec( (err, foundUser) =>{
        if(err || !foundUser){
            req.flash("error", "User not found.");
            req.redirect("back");
        }else{
            res.render("personal_info", {foundUser: foundUser});
        }
    });
});

//RESTFUL Profile Edit-Profile_picture route
router.get("/:id/edit/profile_picture", (req,res) => {
    User.findById(req.params.id).populate("user").exec( (err, foundUser) => {
        if(err || !foundUser){
            req.flash("error", "User not found.");
            res.redirect("back");
        }else{
            console.log(req.params.id);
            res.render("profile_picture", {foundUser:foundUser});
        }
    })
})

//RESTFUL Profile UPDATE Route
router.put("/:id", (req, res) => {
    
    User.findByIdAndUpdate(req.params.id, req.body.userInfo, (err, updatedInfo) => {
        if(err){
            req.flash("error", "User not found")
            res.redirect("/back");
        }else{
            req.session.username = req.body.userInfo.username;           
            res.render("profile", {
                foundUser:updatedInfo,
                username: req.session.username
            });
        }
    })
});





module.exports = router;