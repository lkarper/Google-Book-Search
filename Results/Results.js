import React from 'react';
import Book from '../Book/Book';
import './Results.css';

function Results(props) {
    const books = props.books.map((book, i) => {
        return (
            <Book 
                key={i}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
                bookProp={book}
                url={book.accessInfo.webReaderLink}
            />
        );
    });
    return (
        <section className="results">
            <ul>
                {books}
            </ul>
        </section>
    );
}

export default Results;