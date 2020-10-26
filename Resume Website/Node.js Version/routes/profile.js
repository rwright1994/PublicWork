
const express                = require('express'),
      router                 = express.Router(),
      User                   = require('../models/user'),
      Hobby                  = require('../models/hobby');




      
//----------------------- Routes ---------------------------//

//RESTFUL Route - SHOW (Profile) - Render user's profile page
router.get("/:id", (req,res) => {
    //query database for user information
    User.findById(req.params.id).populate("hobbies").exec( (err, foundUser) => {
        //If there is an error or no user is found log error message.
        console.log(foundUser);
        if(err || !foundUser){
            req.flash("error", "User not found.");
            return res.redirect("back");
        //Else render profile index page passing in founderUsers information
        }else{
            return res.render("profile/index", {
                                    foundUser: foundUser
                                });
        }
    });
});


//RESTFUL Route - EDIT (Profile) - Render edit page for user's personal information.
router.get("/:id/edit", (req,res) => {
    User.findById(req.params.id).populate("user").exec( (err, foundUser) =>{
             //If there is an error or no user is found log error message.
        if(err || !foundUser){
            req.flash("error", "User not found.");
            req.redirect("back");
        }else{
            //Else render profile edit page passing in founderUsers information
            res.render("profile/edit", {
                foundUser: foundUser
            });
        }
    });
});

//RESTFUL Route - UPDATE (Profile) - send put request with form data to mongodb for updating
//async/await necessary as we need the information to update before working with it.
router.put("/:id", async (req, res) => {
    //await find and update completion.
    await User.findByIdAndUpdate(req.params.id, req.body.userInfo, {new: true}, (err, user) => {
         if(err){
             req.flash("error", "User not found")
             return res.redirect("back");
         }else{
             
 
             //Update the user information from the req.body from submitted form.
             user.username = req.body.userInfo.username;
             user.firstName = req.body.userInfo.firstName;
             user.lastName = req.body.userInfo.lastName;
             user.eMail = req.body.userInfo.eMail;
             req.session.username = user.username;
           
             //Update the user data in mongodb.
             user.update((err) =>{
                 if(err){
                     console.log(err);
                 }
                 //login callback from passport.js to update user session infromation.
                 req.login(user, function(err){
                     if(err){
                         console.log(err);
                     }
                        //set currentUser to newly updated currentUser.
                        res.locals.currentUser = user;

                        return res.render('profile/index',{
                        foundUser: user,
                        session: req.session
                        });
                 });
             });
         }//end else
     });
 });


 //RESTFUL Route - DELETE (Profile) - send delete request with the current users id to remove from db.
 //async/await necessary as we need the information to deleted before working with it.

 router.delete('/delete/:id', async (req,res) => {
    await User.findById(req.params.id, (err, foundUser) => {
        if(err){
            console.log(err);
        }else{
            foundUser.remove({_id:req.params.id});
            res.redirect("/logout"); 
        }
    })
});


//--------------------------REFACTOR????------------------//
//RESTFUL Route Edit-Profile_picture route
router.get("/:id/edit/profile_picture", (req,res) => {
    User.findById(req.params.id).populate("user").exec( (err, foundUser) => {
        if(err || !foundUser){
            req.flash("error", "User not found.");
            res.redirect("back");
        }else{
            res.render("profile/profile_picture", {foundUser:foundUser});
        }
    });
})
//--------------------------REFACTOR????------------------//


router.post("/:id/edit/profile_picture", (req, res) => {
    console.log('route hit');
})



    

module.exports = router;