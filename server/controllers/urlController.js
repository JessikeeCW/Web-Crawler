const urlSchema = require('../models/model');
const fetchData = require('../scraper');

//add functionality of getting, posting, and deleting the URLs here.

const urlController = {};

//adds initial information to the database
urlController.postUrl = (req, res, next) => {
  const { url, limit, title } = req.body;

  //fetches urls within the given url
  const links = fetchData(url, limit);
  console.log('links', links);

  //saves information to the db
  urlSchema.create({
    url: url,
    title: title,
    link: links,
  });

  next();
};
module.exports = urlController;
