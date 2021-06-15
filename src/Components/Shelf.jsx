/* eslint-disable no-mixed-operators */
import React from 'react';
import SelectOption from './SelectOption';

export default function Shelf({ name, currentlyReading, wantToRead, read, handleUpdateShelf }) {

  const getSelectedArray = () => {
    if (name === 'currentlyReading') return currentlyReading;
    if (name === 'wantToRead') return wantToRead;
    if (name === 'read') return read;
  }

  const arrayToRender = getSelectedArray();

  return (
    <div>
      <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
             {arrayToRender === undefined ? '' 
              : arrayToRender.map(book => {
               return (
                <li key={book.id}>
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
                        book={book}
                        handleUpdateShelf={handleUpdateShelf}
                      />
                    </div>
                  </div>
                  <div className="book-title">{book.title || 'NOT FOUND'} </div>
                  <div className="book-authors">{book.authors && book.authors.join(', ') || 'no authors found'} </div>
                </div>
              </li>
               );
             })}
        </ol>
      </div>
    </div>
    </div>
  )
}
