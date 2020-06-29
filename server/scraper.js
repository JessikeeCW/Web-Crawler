const requests = require('requests');
const cheerio = require('cheerio');


//crawls through the given url to search for links within the document
const fetchData = (url, limit) => {
  const data = [];

  //this will fetch the url that was given and it will load the html data from it
  requests(url, (err, body) => {
    if (err) return console.error(err);
    // const data = [];
    const $ = cheerio.load(body);

    //searches for any a tag within the document
    $('a').each((i, elem) => {
      // if (i <= limit) {
      data.push({
        title: $(elem).text(),
        link: $(elem).attr('href'),
      });
      // }
    });
    // return data;
  });
  return data;
};

module.exports = fetchData;
