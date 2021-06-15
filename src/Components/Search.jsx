/* eslint-disable no-mixed-operators */
import React, { useState, useEffect } from 'react';
import SelectOption from './SelectOption';
import * as BooksAPI from '../Services/BooksAPI';
import { Link } from 'react-router-dom';
 
export default function Search({ handleUpdateShelf }) {

  const [searchArray, setSearchArray] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const updateSearchArray = async() => {
      const searchArrayData = await BooksAPI.getSearches(searchValue.trim());        
      setSearchArray(searchArrayData);
      if (searchValue === '' || searchValue === undefined) {
        setSearchArray([]);
      }
    }
    updateSearchArray();
  }, [searchValue]);

  const handleInputChange = (value) => {
    setSearchValue(value);
  } 

  return (
    <div className="search-books">

      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input onChange={e => handleInputChange(e.target.value)}
          type="text" placeholder="Search by title or author" value={searchValue} />
        </div>
      </div>
      <div className="search-books-results">
        <div className="results-quantity">Your search returned {searchArray.length} results.</div>
        <ol className="books-grid">
          {searchArray.map((book, index) => {
            return (
              <li key={index}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: "128px",
                      height: "193px",
                      backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail || ''})`,
                    }}                                   
                    >                
                  </div>
                  <div className="book-shelf-changer">
                  <SelectOption 
                    bookId={book.id}
                    book={book}
                    handleUpdateShelf={handleUpdateShelf}
                  />
                  </div>
                </div>
                <div className="book-title">{book.title || "NOT FOUND"} </div>
                <div className="book-authors">{book.authors && book.authors.join(', ') || 'no authors found'} </div>
              </div>
            </li>
            );
          })}
        </ol>
      </div>
    </div>
  )
}
