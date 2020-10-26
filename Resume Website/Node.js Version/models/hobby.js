const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
    title: String,
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
            },
        username: String
    },
  
    desc: String,
    iconURL: String
    
});


module.exports = mongoose.model('Hobby',hobbySchema);