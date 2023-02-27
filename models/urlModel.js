const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlOriginal: {
        type:String,
        trim:true,
        required:[true,"Please, enter the original url."],
        trim:true
    },

    urlCustomize: {
        type:String,
        required:[true,"Please, enter the customise url."],
        trim:true,
        unique: true,
        lowercase: true
    },

    urlShorter: {
        type:String,
        trim:true
    }
},
{ timestamps:true }
);

module.exports = mongoose.mongoose.model("User",urlSchema);
