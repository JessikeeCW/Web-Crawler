const cheerio = require('cheerio');
const rp = require('request-promise');

//crawls through the given url to search for links within the document
const fetchData = (url, limit) => {
  const data = [];
  const options = {
    uri: url,
    transform: function (body) {
      return cheerio.load(body);
    },
  };
  //this will fetch the url that was given and it will load the html data from it
  return rp(options)
    .then(($) => {
      //searches for any a tag within the document
      $('a').each((i, elem) => {
        //find urls until it reaches its limit
        if (i <= limit && $(elem).attr('href').includes('http')) {
          data.push({
            title: $(elem)
              .text()
              .replace(/(\r\n|\n|\r)/gm, ''),
            link: $(elem).attr('href'),
          });
        }
      });
      return data;
    })
    .catch((err) => {
      if (err) return console.error('connection closed due to error', err);
    });
};

module.exports = fetchData;
