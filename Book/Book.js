import React, { useState } from 'react';
import './Book.css';

const Book = (props) => {

    const [book, setBook] = useState(null);

    const { title, author, description, bookProp, image, url } = props; 
    let bookDetails;
    if (book && title !== book.volumeInfo.title) {
        setBook(null);
    } else if (book) {
        const { publisher, publishedDate, pageCount, printType, categories, averageRating } = book.volumeInfo;
        bookDetails = (
            <ul>
                <li>Publisher: {publisher} </li>
                <li>Publication Date: {publishedDate}</li>
                <li>Pages: {pageCount}</li>
                <li>Print type: {printType}</li>
                <li>Categories: {categories}</li>
                <li>Avg. Rating: {averageRating}</li>
            </ul>
        );
    } else {
        bookDetails = null;
    }
    let authorHTML;
    if (author) {
        if (author.length > 1) {
            authorHTML = `Authors: ${author.join(', ')}`;
        } else {
            authorHTML = `Author: ${author}`;
        }
    } else {
        authorHTML = 'No author listed';
    }
    return (
        <li className="book">
            <h2>{title}</h2>
            {image ? <img src={image} alt={`The book ${title}`} />: <p>Sorry, no image available</p>}
            <p>{authorHTML}</p>
            <p>{description ? description : 'No description available'}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">Read this book on GoogleBooks</a>
            <button 
                type="button" 
                onClick={(e) => {
                    e.preventDefault();
                    setBook(bookProp);
                }}    
            >Click to see more info on this book</button>
            {bookDetails}
        </li>
    );
}

export default Book;