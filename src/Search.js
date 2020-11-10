import React from 'react';
import './Search.css'
import apiKey from './apiKey'


class Search extends React.Component {
  state = {query: ''}

  searchQuery = (query) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&key=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(obj => this.props.update(obj.items, url));
  }

  render() {
    return (
      <form
        className='search-bar'
        onSubmit={(evt) => {
          evt.preventDefault();
          return this.searchQuery(this.state.query)
        }}
      >
        <label>Search:</label>
        <input type='text' onChange={(e) => this.setState({...this.state, query: e.target.value})} />
        <button type='submit'>Search</button>
      </form>
    )
  }

  componentDidMount() {
    return (
      this.searchQuery('javascript')
    )
  }


}

export default Search;