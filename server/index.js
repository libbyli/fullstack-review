const express = require('express');
let app = express();
const helper = require('../helpers/github');
const bodyParser = require('body-parser');
const db = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  const username = Object.keys(req.body)[0];
  helper.getReposByUsername(username, (err, result) => {
    if (err) {
      console.log('error in post request: ', err);
    } else {
      res.send('repo data sent to db');
    }
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.retrieve((err, result) => {
    if (err) {
      console.log('error in get request: ', err);
    } else {
      result.sort((a, b) => {
        return b.stars - a.stars;
      });
      res.send(result);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

