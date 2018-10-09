import React from 'react'

export default ({book}) => {
  return (
    <article className="books">
        <img src={`http://books.google.com/books/content?printsec=frontcover&img=1&zoom=1&source=gbs_api&id=${book.id}`}  alt="" className="cover"/>
        <h2 className="book_title">{book.title}</h2>
        <h3>{`by ${book.author}`}</h3>
        <div className="buyit">
            <span>{book.was}</span>
            <b className="now">{book.price}</b>
            <a href="#">Buy</a>
        </div>
    </article>
  )
}
