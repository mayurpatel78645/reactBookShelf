/* eslint-disable no-mixed-operators */
import React from 'react';
import Shelf from './Shelf';

export default function Shelves({ currentlyReading, wantToRead, read, handleUpdateShelf }) {
  return (
    <>
      <Shelf 
        name='currentlyReading' 
        handleUpdateShelf={handleUpdateShelf}
        currentlyReading={currentlyReading}
      />
      <Shelf 
        name='wantToRead' 
        handleUpdateShelf={handleUpdateShelf}
        wantToRead={wantToRead} 
      />
      <Shelf 
        name='read' 
        handleUpdateShelf={handleUpdateShelf}
        read={read} 
      /> 
    </>
  )
}
