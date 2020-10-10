const mongoose              = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    eMail: String,
    status: {type:Boolean, default: true}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);