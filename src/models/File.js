const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path:{
        type: String,
        required: true
    }
}, 
{
    timestamps: true,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

File.virtual('url').get(function(){
    return `http://localhost:3000/files/${this.path}`;
})

module.exports = mongoose.model('File', File);