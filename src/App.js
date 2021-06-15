/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Shelves from './Components/Shelves';
import Search from './Components/Search';
import * as BooksAPI from './Services/BooksAPI';

function App() {
  const [booksList, setBooksList] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    const generateBooksList = async() => {
      const data = await BooksAPI.getAllData();
      setBooksList(data);
    }  
    generateBooksList();
    setCurrentlyReading(booksList.filter(item => item.bookStatus === 'CurrentlyReading'));
    setWantToRead(booksList.filter(item => item.bookStatus === 'WantToRead'));
    setRead(booksList.filter(item => item.bookStatus === 'Read'));
  }, [booksList]);

  const handleUpdateShelf = async(currentShelf, bookId ) => {
    await BooksAPI.patchData(currentShelf, bookId);    
  }

  return (
    <Router>
      <div className="app">
        <div className="list-books">
          <Switch>
            <Route exact path='/'>
              <div className="list-books-title"><h1>MITTReads</h1></div>
              <div className="list-books-content">
                <Shelves
                  handleUpdateShelf={handleUpdateShelf}
                  currentlyReading={currentlyReading}   
                  wantToRead={wantToRead}
                  read={read}
                />     
                <div className="open-search">
                  <Link to='/search'>Add a book</Link>
                </div>
              </div>  
            </Route>    
            <Route path='/search'>
              <Search 
                handleUpdateShelf={handleUpdateShelf}
              />
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
