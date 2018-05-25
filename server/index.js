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

  // console.log('req body :', req.body)
  const username = Object.keys(req.body)[0];
  // console.log('username: ', username);
  helper.getReposByUsername(username, formattedData => {
    console.log('formatted data received from helper');
    // formattedData.forEach(repo => {
    //   db.save
    // })
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

