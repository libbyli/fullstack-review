import React from 'react';

const divStyle = {
  'max-width': '450px',
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: 
      <div className="input-group mb-3" style={divStyle}>
      <input 
        type="text"
        className="form-control"
        value={this.state.term} 
        onChange={this.onChange}
      />   
      <div className="input-group-append">    
      <button 
        className="btn btn-outline-secondary"
        type="button"
        onClick={this.search}
      > Add Repos 
      </button></div>
    </div>
    </div>) 
  }
}

export default Search;