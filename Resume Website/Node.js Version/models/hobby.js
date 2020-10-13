const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
            },
        username: String
    },
    title: String,
    desc: String,
    iconURL: String
    
});

module.exports = mongoose.model('Hobby',hobbySchema);