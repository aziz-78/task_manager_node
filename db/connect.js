const mongoose = require('mongoose')
require('dotenv').config();
url = process.env.db_url
const connectDB =async () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
 console.log("connected")
}

module.exports = connectDB
