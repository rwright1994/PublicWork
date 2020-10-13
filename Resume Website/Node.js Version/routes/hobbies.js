
const express                   = require('express'),
      router                    = express.Router({mergeParams:true}), //Merge the req.body from primary route.
      User                      = require('../models/user'),
      Hobby                     = require('../models/hobby');



//RESTFUL Route - Show(Hobby) - Render Hobby Index page.
router.get("/", (req,res) => {
    User.findById(req.params.id).populate('hobby').exec( (err, foundUser) => {
        if(err || !foundUser){
            req.flash("error", "User not found.");
        }else{
            res.render('profile/hobbies/index', {foundUser:foundUser});
        }
    });
});


//RESTFUL ROUTE - New (Hobby) - Render new Hobby form
router.get("/new", (req, res) => {
    if(req.user){
        return res.render("profile/hobbies/new")
    }else{
        return res.redirect("index");
    };
});

//RESTFUL ROUTE - Create (Hobby) - Send data to mongoDB and add entry
//async/await necessary as we need the information to update before working with it.
router.post("/", async (req,res) => {
   await User.findById(req.params.id, (err, foundUser) =>{
        if(err || !foundUser){
            req.flash("User not found.");
            res.redirect('');
        }else{
            Hobby.create(req.body.hobby, (err, hobby) => {
                if(err){
                    req.flash(err);
                }else{
                    hobby.user.id = req.params.id;
                    hobby.user.username = req.user.username;
                    hobby.name = req.body.hobby.title;
                    hobby.desc = req.body.hobby.desc;
                    hobby.save();
                    foundUser.hobbies.push(hobby);
                    foundUser.save();
                    res.redirect("/profile/index");
                }
            })
        }
    })
})

module.exports = router