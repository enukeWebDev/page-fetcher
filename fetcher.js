const request = require('request');
const fs = require('fs');

request('http://www.example.edu/', (error, response, content) => {
  if (!error) {
    fs.writeFile('./index.html', content, (err) => {
      if (err) {
        console.log(`Error - cannot download files!`);
      } else {
        console.log(`Downloaded and saved ${content.length} bytes to ./index.html`);
      }
    });
  }
});

//Using the example provided
//node fetcher.js http://www.example.edu/ ./index.html
//Downloaded and saved 3261 bytes to ./index.html
//Downloaded and saved 1235 bytes to ./index.html.
