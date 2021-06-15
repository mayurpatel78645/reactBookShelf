const baseURL = `http://localhost:5003`;

export const getAllData = async() => {
  const response = await fetch(`${baseURL}/books`);
  const data = await response.json();
  return data;
}

export const getSearches = async(searchValue) => {
  const response = await fetch(`${baseURL}/books?q=${searchValue}`);
  const data = await response.json();
  return data;
}

export const patchData = async(currentShelf, bookId) => {
  const response = fetch(`${baseURL}/books/${bookId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ bookStatus: `${currentShelf}` })
  });
  const data =  (await response).json();
  return data;
}
