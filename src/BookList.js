import React from 'react'
import Book from './Book'
import './BookList.css'

class BookList extends React.Component {
  static defaultProps = {books: []}
  render() {
    return (
      <div className='booklist'>
        {
          this.props.books.map(book => {
            return <Book book={book} />
          })
        }
      </div>
    )
  }
}

export default BookList;