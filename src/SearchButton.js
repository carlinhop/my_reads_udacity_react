import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class SearchButton extends Component{

  
  state = {showSearchPage: false}
	
	render(){
      return(
        <div className="open-search">
          <Link to="/search" />
        </div>
      )
    }
}

export default SearchButton