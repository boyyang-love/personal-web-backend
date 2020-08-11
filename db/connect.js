/* jshint esversion:6 */
const mongoose = require('mongoose')

const DATAURL = 'localhost'
const PORT = 27017
const NAME = 'personalweb'
// mongodb://localhost:27017/users
module.exports = new Promise((resolve, reject) => {
    mongoose.connect(`mongodb://${DATAURL}:${PORT}/${NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('open', (err) => {
        if (!err) {
            resolve('mongodb is connected!!');
            console.log('mongodb is connected')
        } else {
            reject(err);
        }
    });
})