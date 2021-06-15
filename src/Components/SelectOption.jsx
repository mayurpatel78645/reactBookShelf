import React from 'react';

export default function SelectOption({ handleUpdateShelf, book }) {

  return (
    <select value={book.bookStatus} onChange={e => handleUpdateShelf(e.target.value, book.id)} >
      <option value="move" disabled>Move to...</option>
      <option value="CurrentlyReading">Currently Reading</option>
      <option value="WantToRead">Want to Read</option>
      <option value="Read">Read</option>
      <option value="None">None</option>
    </select>
  );
}
