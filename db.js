const mongoose = require('mongoose')
const passportLocal = 'mongodb://localhost:27017/passport'
const fishCould = 'mongodb+srv://fishmin:fishmin@1234@cluster0.qavck.mongodb.net/passport?retryWrites=true&w=majority'
const MONGO_DB_URI = process.env.MONGODB_URI;
mongoose.connect(fishCould, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})