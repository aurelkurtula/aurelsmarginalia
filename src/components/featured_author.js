import React from 'react'

export default ({book}) => {
  return (
    <div >
      <h3 className="subheading">
            featured Author
        </h3>
        <h2 className="book_title">{book.author}</h2>
        <div className="book">
            <img src={`http://books.google.com/books/content?printsec=frontcover&img=1&zoom=1&source=gbs_api&id=${book.id}`}  alt="" className="cover"/>
            <h2 className="book_title">{book.title}</h2>
            <p className="description">{book.description}</p>
            <div className="buyit">
            <span>{`£${book.price}`}</span>
            <a href="#">Buy</a>
            </div>
        </div>
    </div>
  )
}
