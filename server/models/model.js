const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.DB_PASSWORD;

//connects mongoose to the mongo db and returns a promise
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Cluster0',
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(`Error:${err}`);
  });
//creates a new child model
const childSchema = new mongoose.Schema({
  title: { type: String },
  link: { type: String },
});
//creates a new model instance
const schema = new mongoose.Schema({
  url: { type: String },
  links: [childSchema],
});

const UrlSchema = mongoose.model('UrlSchema', schema);

module.exports = UrlSchema;
