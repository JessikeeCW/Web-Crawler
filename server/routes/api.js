const express = require('express');
const apiRouter = express.Router();

//require middleware controllers here
const urlController = require('../controllers/urlController');

//api routes

//adds the parent url to the db
apiRouter.post('/search', urlController.postUrl, (req, res) => {
  res.status(200).json(res.locals.links);
});

module.exports = apiRouter;
