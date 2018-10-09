import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FeaturedAuthor from './components/featured_author'
import Discounts from './components/Discounts'
import AllBooks from './components/AllBooks'
import data from './data/data.json'
class App extends Component {

  render() {
    console.log(data)
    return (
      <>
      <header></header>
      <div className="top">
        <section className="module white featured_author">
          <div className="content">
            <div id="featuredBook">
              {
                data.books.map(book =>{
                  if(book.feature){
                    return(<FeaturedAuthor key={book.id} book={book} />)
                  }
                })
              }
            </div>
          </div>
        </section>
        <section className="module red discount">
          <div className="content">
              <h3 className="subheading"> Discounts up to 50%</h3>
              {
                data.books.map(book => {
                  if(book.was){
                    return(<Discounts key={book.id} book={book} />)
                  }
                })
              }
          </div>
        </section>
        <section className="module black newsleter_s">
              <div className="content">
              <span className="jtest"></span>
              </div>
        </section>
      </div> {/* /.top  */}
      <div id="contentwrap">
        <section className="module red posts_col">
          <article>
            <h2><a href="#">2 Writer Brings in the World While She Keeps It at Bay</a></h2>
            <h3>by JULIE BOSMAN</h3>
            <p>Donna Tartt is promoting her latest novel, “The Goldfinch,” although tours and interviews aren’t her favorite things.</p>
          </article>
          <article>
            <h2><a href="#">2 Writer Brings in the World While She Keeps It at Bay</a></h2>
            <h3>by JULIE BOSMAN</h3>
            <p>Donna Tartt is promoting her latest novel, “The Goldfinch,” although tours and interviews aren’t her favorite things.</p>
          </article>
          <article>
            <h2><a href="#">2 Writer Brings in the World While She Keeps It at Bay</a></h2>
            <h3>by JULIE BOSMAN</h3>
            <p>Donna Tartt is promoting her latest novel, “The Goldfinch,” although tours and interviews aren’t her favorite things.</p>
          </article>
        </section>
        <section className="maincontent">
        <div className="content">
              <h3 className="subheading"> Latest Posts</h3>
              {
                data.books.map(book => {
                
                    return(<AllBooks key={book.id} book={book} />)
                  
                })
              }
          </div>
        </section>
      </div> {/* /#contentwrap  */}
      </>
    );

  }
}

export default App;
