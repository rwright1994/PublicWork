const mongoose              = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Hobby                 = require('../models/hobby');



const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true, 
    },
    password: String,
    firstName: String,
    lastName: String,
    eMail: String,
    status: {type:Boolean, default: true},
    hobbies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hobby"
        }
    ]
});

userSchema.pre('remove',function(next){
    
    console.log("this is from the pre of UserSchema");
    console.log(this);
    Hobby.remove({_id: this.user._id}).exec();
    return next();
})


userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);