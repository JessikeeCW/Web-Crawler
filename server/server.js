const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.port || 8000;

app.use(cors({ origin: 'http://localhost:3000', methods: 'POST' }));
app.use(bodyParser.json());

//parse through the urlencoded body from the request and add it into the req.body
app.use(bodyParser.urlencoded({ extended: true }));

//static files go here
app.use('/public', express.static(path.join(__dirname, '../client/public')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/public/index.html'));
});

//require routes here
const apiRouter = require('./routes/api');

//route handlers here
app.use('/', apiRouter);

//catches all unknown route request
app.use((req, res) => {
  console.log('in catch-all route handler');
  res.sendStatus(404);
});

//global error handler
app.use((req, res, err) => {
  console.log(`global error handler caught unknown middleware error: ${err}`);
  res.sendStatus(400).json({ err: 'an error has occured' });
});

app.listen(PORT, () => console.log(`listening on port:${PORT}`));

module.exports = app;
