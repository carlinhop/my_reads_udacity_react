import React from 'react'
import {Route, Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBar from './SearchBar'
import BookShelf from './BookShelf'
import SearchButton from './SearchButton'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
	
             
  render() {
    return (
  	<BrowserRouter> 
    <div className="app">
      	<Route exact path="/" render={(props)=>{
    	return(
              <div>
                <BookShelf title="Currently Reading"/>
    			<BookShelf title="Want to Read"/>
    			<BookShelf title="Read"/>
                <SearchButton/>
              </div>
  			)}}
     	/>
     	<Route exact path="/search" component={SearchBar}
		/>
   </div>
     </BrowserRouter> 
 	)
  }
}

export default BooksApp