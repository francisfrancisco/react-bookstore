import React from 'react'

const Book = (props) => {
  return (
    <div className="collection-item">
      <div className="row">
        {/* <form onSubmit={this.handleSubmit}></form> */}
        <div className="col-md-6">{props.book.title}</div>
        <div className="col-md-3">{props.book.author}</div>
        <div className="col-md-3">${(props.book.price).toFixed(2)}</div>
      </div>
    </div>
  )
}

export default Book
