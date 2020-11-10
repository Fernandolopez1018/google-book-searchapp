import React from 'react'
import './Book.css'
import defaultBook from './img/book.jpeg'

class Book extends React.Component {

  render() {
    return (
      <div className='book'>
        <img src={
          (this.props.book.volumeInfo.imageLinks)
          ? this.props.book.volumeInfo.imageLinks.thumbnail
          : defaultBook
        } alt='book' />
        <div className='book-info'>
          <label className='book-title'><b>{this.props.book.volumeInfo.title}</b></label>
          {
            (this.props.book.volumeInfo.authors)
            ? <label><b><i>Author(s): {this.props.book.volumeInfo.authors.join(', ')}</i></b></label>
            : null
          }
          <label><i>Price: {
            (this.props.book.saleInfo.listPrice)
            ? `$` + this.props.book.saleInfo.listPrice.amount
            : this.props.book.saleInfo.saleability.replaceAll('_', ' ')
          }</i></label>
          <label className='book-description'>{
            (this.props.book.volumeInfo.description)
            ? this.props.book.volumeInfo.description
            : this.props.book.volumeInfo.mainCategory
          }</label>
        </div>
      </div>
    )
  }
}


export default Book;