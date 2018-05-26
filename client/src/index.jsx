import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  componentDidMount() {
    this.fetch();
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: term,
      success: data => {
        this.fetch();
      },
      error: error => {
        console.log('search error: ', error)
      }
    })
  }

  fetch() {
    $.ajax({
      type: 'GET',
      url: '/repos',
      success: data => {
        let dataArray = [];
        data.forEach(repo => {
          dataArray.push(repo);
        });
        dataArray = dataArray.slice(0, 25);
        this.setState({
          repos: dataArray,
        });
      },
      error: error => {
        console.log('fetch error: ', error)
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));