const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {

let repoSchema = mongoose.Schema({
  name: String,
  owner: String,
  url: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

// });

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const user = new Repo(repos)
}

module.exports.save = save;