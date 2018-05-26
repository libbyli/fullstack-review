const request = require('request');
const config = require('../config.js');
const { url } = require('url');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL

  const url = 'https://api.github.com/users/' + username + '/repos';
  const repoUrl = new URL(url);

  let options = {
    url: repoUrl,
    headers: {
      'User-Agent': 'libbyli',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (error, response, body) => {
    if (error) {
      console.log('request error:', error);
      console.log('request error statusCode:', response && response.statusCode);
    }
    const repoData = JSON.parse(body);
    formattedData = [];
    repoData.forEach(repo => {
      let formattedRepo = formatRepo(repo);
      formattedData.push(formattedRepo);
    });
    callback(formattedData);
  });
}

const formatRepo = repo => {
  let formattedRepo = {
    name: repo.name,
    owner: repo.owner.login,
    url: repo.html_url,
    stars: repo.stargazers_count,
  };
  return formattedRepo;
}


module.exports.getReposByUsername = getReposByUsername;