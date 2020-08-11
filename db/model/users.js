const mongoose = require('mongoose')

let Schema = mongoose.Schema

let usersSchema = new Schema({
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comment: {
        type: Array,
        required: false
    },
    sinupTime: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('users', usersSchema)
// const mongoose = require('mongoose');

// let Schema = mongoose.Schema;

// let usersSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         required: true
//     },
//     sex: {
//         type: String,
//         required:false
//     },

// });

// module.exports = mongoose.model('users', usersSchema);