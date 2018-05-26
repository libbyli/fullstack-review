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

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: term,
      success: data => {
        this.fetch();
        console.log('search data: ', data)
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
        console.log('fetched data: ', data)
      },
      error: error => {
        console.log('fetch error: ', error)
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));