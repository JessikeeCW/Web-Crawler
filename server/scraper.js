const requests = require('requests');
const cheerio = require('cheerio');

//allows for you to access the data outside of the request. saves an array of titles and urls
const save = (data) => {
  return data;
};

//crawls through the given url to search for links within the document
const fetchData = (url, limit) => {
  const data = [];

  //this will fetch the url that was given and it will load the html data from it
  requests(url)
    .on('data', (body) => {
      const $ = cheerio.load(body);
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
      save(data);
    })
    .on('end', (err) => {
      if (err) return console.error('connection closed due to error', err);
    });

  //return out data here. Need to figure out a way to wait for data to be loaded before returning it out
  //returning the variable data as aplace holder for where I want to return out information
  return data;
};

module.exports = fetchData;
