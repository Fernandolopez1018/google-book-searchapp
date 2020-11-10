import React from 'react'
import './Filter.css'
import apiKey from './apiKey'

class Filter extends React.Component {
  printType = (type) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.query}&printType=${type}&key=${apiKey}`)
    .then(res => res.json())
    .then(arr => console.log('', arr));
  }

  render() {
    return (
      <div className='filter-bar'>
        <div className='print-type'>
          <label>Print Type:</label>
          <select
            defaultValue='all'
            onChange={(e) => this.printType(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='books'>Books</option>
            <option value='magazines'>Magazines</option>
          </select>
        </div>
        <div className='book-type'>
          <label>Book Type:</label>
          <select defaultValue='no-filter'>
            <option value='no-filter' disabled>No Filter</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Filter;