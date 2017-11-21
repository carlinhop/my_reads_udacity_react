import React from 'react'
import {Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import {getAll, update} from './BooksAPI'
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
    showSearchPage: false,
    books: [],

  }

	constructor(props){
    super(props)
    this.updateAllData = this.updateAllData.bind(this)
    this.updateShelf = this.updateShelf.bind(this)
    this.findBookInState = this.findBookInState.bind(this)
    }

	updateAllData(){
    	getAll().then((results)=>{
      			this.setState({books:results})
			})
    }	

    componentDidMount(){
      	return this.updateAllData()
    }

	updateShelf(book, value){
    	update(book, value).then((result)=>{
      	
      	return getAll().then((results)=>{
      			this.setState({books:results})
			})
    	})
    }

	findBookInState(book){
    	let result
      	for(let i = 0; i < this.state.books.length; i++){
      		if(this.state.books[i].id === book.id){
      			result = this.state.books[i]
      			break
    		}
			else{
              	book.shelf = "none"
            	result = book
            }
  		}
		return result
    }
         
  render() {
    return (
  	<BrowserRouter> 
    <div className="app">
      	<Route exact path="/" render={(props)=>{
    	return(
              <div>
                <BookShelf updateShelf={this.updateShelf} books={this.state.books.filter(book => (
    				book.shelf === "currentlyReading"				
    ))} title="Currently Reading"/>
    			<BookShelf updateShelf={this.updateShelf} books={this.state.books.filter(book => (
    				book.shelf === "wantToRead"				
    ))} title="Want to Read"/>
    			<BookShelf updateShelf={this.updateShelf} books={this.state.books.filter(book => (
    				book.shelf === "read"				
    ))} title="Read"/>
                <SearchButton/>
              </div>
  			)}}
     	/>
     	<Route exact path="/search" render={(props) => {
          return (
          	<SearchBar updateHomeData={this.updateAllData} findBookInState={this.findBookInState}  />
          	)}}
		/>
   </div>
     </BrowserRouter> 
 	)
  }
}

export default BooksApp
