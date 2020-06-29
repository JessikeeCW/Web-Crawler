const express = require('express');
const apiRouter = express.Router();

//require middleware controllers here
const urlController = require('../controllers/urlController');

//api routes

//adds the parent url to the db
apiRouter.post('/search', urlController.postUrl, (req, res) => { 
  console.log('in apiRouter res.locals', res.locals);
  // res.status(200).json(res.locals.data);
  res.sendStatus(200);

});

// //searches for the title and urls inside of a given url
// apiRouter.get('/urls', (req, res) => {

//   res.status(200).json(res.locals);
// });
module.exports = apiRouter;
