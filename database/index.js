const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {

let repoSchema = mongoose.Schema({
  name: String,
  owner: String,
  url: { type: String, unique: true },
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

// });

let insert = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const repoEntry = new Repo({
    name: repo.name, 
    owner: repo.owner,
    url: repo.url,
    stars: repo.stars
  });

  repoEntry.save(err => {
    if (err) {
      console.log('error: ', err);
    }
  });
}

module.exports.insert = insert;