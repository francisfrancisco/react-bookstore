import React from 'react'
import Book from './book'

const Books = (props) => {
  let listOfBooks  = props.booksList.map(book => <Book key={book.id} book={book} />)

  return (
    <div className="container">
      <h1>Books</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-6">Title</div>
            <div className="col-md-3">Author</div>
            <div className="col-md-3">Price</div>
          </div>
        </div>
        {listOfBooks}
      </div>
    </div>
  )
}

export default Books
