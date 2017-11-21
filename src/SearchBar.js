import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search, update } from "./BooksAPI";
import BookShelf from "./BookShelf";

class SearchBar extends Component {
  //add static propTypes
  state = {
    search: "",
    searchResults: []
  };
  constructor(props) {
    super(props);
  }

  updateSearch = event => {
    if (!event.target.value) {
      this.setState({ search: "", searchResults: [] });
    } else {
      this.setState({ search: event.target.value }, () => {
        search(this.state.search, 10).then(results => {
          this.setState(oldState => {
            let filteredResults = results.map(book => {
              return this.props.findBookInState(book);
            });

            return { searchResults: filteredResults };
          });
        });
      });
    }
  };

  updateShelf(book, value) {
    return update(book, value);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
            onClick={event => {
              this.props.updateHomeData();
            }}
          />
          <div className="search-books-input-wrapper">
            {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.search}
              onChange={e => this.updateSearch(e)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookShelf
              updateShelf={this.updateShelf}
              books={this.state.searchResults}
              title="Search Results"
            />
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBar;
