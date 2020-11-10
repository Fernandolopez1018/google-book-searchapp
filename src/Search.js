import React from 'react';
import './Search.css'
import apiKey from './apiKey'


class Search extends React.Component {
  state = {query: ''}

  searchQuery = (query) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
    .then(res => res.json())
    .then(obj => this.props.update(query, obj.items));
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