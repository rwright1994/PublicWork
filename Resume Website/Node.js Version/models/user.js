const mongoose              = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
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
            ref: "hobbies"
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);