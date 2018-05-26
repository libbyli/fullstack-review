const request = require('request');
const config = require('../config.js');
const { url } = require('url');
const db = require('../database/index');

let getReposByUsername = (username, callback) => {
  const url = 'https://api.github.com/users/' + username + '/repos';
  const repoUrl = new URL(url);

  let options = {
    url: repoUrl,
    headers: {
      'User-Agent': 'libbyli',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, response, body) => {
    if (err) {
      console.log('request error:', err);
      console.log('request error statusCode:', response && response.statusCode);
      callback(err, null);
    }
    const repoData = JSON.parse(body);
    formattedData = [];
    repoData.forEach(repo => {
      let formattedRepo = formatRepo(repo);
      formattedData.push(formattedRepo);
    });
    for (let i = 0; i < formattedData.length; i += 1) {
      db.insert(formattedData[i]);
    }
    callback(null, formattedData);
  });
}

const formatRepo = repo => {
  let formattedRepo = {
    name: repo.name,
    owner: repo.owner.login,
    url: repo.html_url,
    ownerUrl: repo.owner.html_url,
    stars: repo.stargazers_count,
  };
  return formattedRepo;
}


module.exports.getReposByUsername = getReposByUsername;