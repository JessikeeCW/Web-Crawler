const urlSchema = require('../models/model');
const fetchData = require('../scraper');

//add functionality of getting, posting, and deleting the URLs here.

const urlController = {};

//adds initial information to the database
urlController.postUrl = async (req, res, next) => {
  const { url, limit } = req.body;

  //fetches urls within the given url
  const links = await fetchData(url, limit);

  //saves information to the db
  urlSchema.create({
    url: url,
    links: links,
  }, (err, links) => {
      if (err)`Error in creating schema ${err}`;
      else {
        res.locals.links = links;
        return next();
      }
  });

  
};
module.exports = urlController;
