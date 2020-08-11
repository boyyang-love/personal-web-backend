const mongoose = require('mongoose')

const Schema = mongoose.Schema

let commentSchema = new Schema({
    nickname: {
        type: String,
        rquired: true
    },
    email: {
        type: String,
        required: false
    },
    commentText: {
        type: String,
        required: false
    },
    commentTime: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('comment', commentSchema)