import React from 'react'
import Book from './Book'


 let BookShelf = (props)=> {

    let books = props.books.map(
      (book) => (<li><Book image={book.imageLinks.smallThumbnail} key={book.id} title={book.title} author={book.author}/></li>)
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