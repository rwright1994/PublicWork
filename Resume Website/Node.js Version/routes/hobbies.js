
const express                   = require('express'),
      router                    = express.Router({mergeParams:true}), //Merge the req.body from primary route.
      User                      = require('../models/user'),
      Hobby                     = require('../models/hobby');



//RESTFUL Route - Show(Hobby) - Render Hobby Index page.
router.get("/", (req,res) => {
    User.findById(req.params.id).populate('hobbies').exec( (err, foundUser) => {
        if(err || !foundUser){
            req.flash("error", "User not found.");
        }else{
            res.render('hobbies/index', {
                foundUser:foundUser,
            
            });
        }
    });
});


//RESTFUL ROUTE - New (Hobby) - Render new Hobby form
router.get("/new", (req, res) => {
    if(req.user){
        return res.render("hobbies/new")
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
            res.redirect('/profile');
        }else{
            Hobby.create(req.body.hobby, (err, hobby) => {
                if(err){
                    req.flash(err);
                }else{
                    
                    hobby.user.id = req.params.id;
                    hobby.user.username = req.user.username;
                    hobby.title = req.body.hobby.title;
                    hobby.desc = req.body.hobby.desc;
                    hobby.save();
            
                    //Push new hobby in to the found user sechma and save.
                    foundUser.hobbies.push(hobby);
                    foundUser.save();
                   
                    res.redirect("/profile/"+ foundUser._id + "/edit/profile_hobbies");
                }
            });
        }
    });
});

//RESTFUL ROUTE - Delete (Hobby) - Send data to mongoDB and delete entry
//async/await necessary as we need the information to update before working with it.

// Route path that contains more than one id must be named differently otherwise
// the last :id_name will take presedence.
router.delete("/:hobby_id", async (req ,res) => {

    await Hobby.findByIdAndRemove(req.params.hobby_id, (err) => {
        if(err){
            console.log("db entry not found!");
            res.redirect("/profile/hobbies/index");
        }else{
           
            res.redirect("/profile/" + req.params.id + "/edit/profile_hobbies/");
        }
    });

    
})

module.exports = router