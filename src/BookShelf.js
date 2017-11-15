import React from 'react'
import Book from './Book'


 let BookShelf = (props)=> {

    let books = props.books.length > 0 && props.books.map(
      (book) => (<li><Book updateShelf={props.updateShelf} image={book.imageLinks.smallThumbnail} key={book.id} id={book.id} title={book.title} author={book.author} shelf={book.shelf}/></li>)
    )   
    return (
      			
              	<div className="bookshelf">
                  <h2 className="bookshelf-title">{props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      	
      				{books}
                      	
                    </ol>
                  </div>
                </div> 
      )
	}

export default BookShelf