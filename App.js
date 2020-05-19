import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Form from './Form/Form';
import Results from './Results/Results';

const App = () => {

  const [items, setItems] = useState(null);
  const [noResults, setNoResults] = useState(null);
  const [error, setError] = useState(null);

  const search = (term, printType, bookType) => {
    const url = 'https://www.googleapis.com/books/v1/volumes?';
    const key = 'AIzaSyAVpPog1Zv9BRj1Owel7zXII-w55U1W3O8';
    const queryParams = {
      q: term,
      filter: bookType,
      printType,
      key
    };

    const queryString = Object.keys(queryParams)
      .map(key => {
        if (queryParams[key]) {
          return `${key}=${queryParams[key]}`;
        }
        return "";
      })
      .filter(item => item !== "")
      .join('&');
    const queryURL = `${url}${queryString}`;
    fetch(queryURL)
      .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong; please try again later');
      })
      .then(data => {
          if (data.totalItems === 0) {
            setItems(null);
            setNoResults("Looks like no results were found.  Check your input for typos and try again.");
            setError(null);
          } else {
            setItems(data.items);
            setNoResults(null);
            setError(null);
          }
        })
      .catch(error => {
        setItems(null);
        setNoResults(null);
        setError(error.message);
      });
  }

  return (
    <>
      <header>
        <Header />
        <Form onSearch={search}/>
      </header>
      <main>
        {error ? <p>Looks like something went wrong: {error}</p> : ""}
        {noResults ? <p>{noResults}</p> : ""}
        {items ? <Results books={items} /> : ""}
      </main>
    </>
  );
}

export default App;
