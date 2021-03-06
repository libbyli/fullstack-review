const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: String,
  owner: String,
  url: { type: String, unique: true },
  ownerUrl: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let insert = (repo) => {
  const repoEntry = new Repo({
    name: repo.name, 
    owner: repo.owner,
    url: repo.url,
    ownerUrl: repo.ownerUrl,
    stars: repo.stars
  });

  repoEntry.save(err => {
    if (err) {
      console.log('repo insertion error: ', err);
    }
  });
}

let retrieve = (callback) => {
  Repo.find({}, (err, docs) => {
    if (err) {
      console.log('repo retrieval error: ', err);
      callback(err, docs);
    }
    callback(null, docs);
  });
}

module.exports.insert = insert;
module.exports.retrieve = retrieve;