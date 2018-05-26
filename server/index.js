const express = require('express');
let app = express();
const helper = require('../helpers/github');
const bodyParser = require('body-parser');
const db = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  const username = Object.keys(req.body)[0];
  helper.getReposByUsername(username, formattedData => {
    for (let i = 0; i < formattedData.length; i += 1) {
      db.insert(formattedData[i]);
    }
    res.send('repo data sent to db');
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.retrieve(docs => {
    docs.sort((a, b) => {
      return b.stars - a.stars;
    });
    res.send(docs);
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

