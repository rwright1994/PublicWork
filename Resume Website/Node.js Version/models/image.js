const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    user:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    },
    img:{
        data: Buffer,
        ContentType: String
    }
});

module.exports = mongoose.model('Image', imageSchema);

