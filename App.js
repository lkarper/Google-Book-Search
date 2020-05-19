import React from 'react';
import './App.css';
import Header from './Header/Header';
import Form from './Form/Form';
import Results from './Results/Results';

class App extends React.Component {

  state = {
    items: [],
    noResults: null,
    error: null
  }

  Search = (term, printType, bookType) => {
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
            this.setState({
              items: null,
              noResults: "Looks like no results were found.  Check your input for typos and try again.",
              error: null
            })
          } else {
            this.setState({
              items: data.items,
              noResults: null,
              error: null
            })
          }
        })
      .catch(error => {
        this.setState({
          items: null,
          noResults: null,
          error: error.message
        });
      });
  }

  render() {
    return (
      <>
        <header>
          <Header />
          <Form onSearch={this.Search}/>
        </header>
        <main>
          {this.state.error ? <p>Looks like something went wrong: {this.state.error}</p> : ""}
          {this.state.noResults ? <p>{this.state.noResults}</p> : ""}
          {this.state.items? <Results books={this.state.items} /> : ""}
        </main>
      </>
    );
  }
}

export default App;
