import React from 'react'
import './Filter.css'
import apiKey from './apiKey'

class Filter extends React.Component {
  printType = (type) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.props.query}&maxResults=10&printType=${type}&key=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(arr => this.props.update(arr.items));
  }

  bookType = (type) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.props.query}&maxResults=10&filter=${type}&key=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(arr => this.props.update(arr.items, url));
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
          <select
            defaultValue=''
            onChange={(e) => this.bookType(e.target.value)}
          >
            <option value='' >No Filter</option>
            <option value='partial' >Previewable</option>
            <option value='full' >Full text</option>
            <option value='free-ebooks' >Free-Ebooks</option>
            <option value='paid-ebooks' >Paid E-books</option>
            <option value='ebooks' >E-books</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Filter;