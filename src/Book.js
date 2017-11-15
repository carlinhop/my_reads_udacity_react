import React from 'react'
import {get} from './BooksAPI'

let Book = (props) =>{
  	
	return (		
                        <div className="book">
                          <div className="book-top">
                  			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.image})`}}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={props.shelf} id={props.id} onChange={(event)=>{
									let value = event.target.value
									get(event.target.id).then((book)=>(props.updateShelf(book, value)))


									
									
									
								}}
							  >
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{props.title}</div>
                          <div className="book-authors">{props.author}</div>
                        </div>
            	
    )
}

export default Book