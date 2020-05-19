import React from 'react';
import './Book.css';

class Book extends React.Component {
    state = {
        book: null
    }

    showBook = (book) => {
        this.setState({
            book
        });
    }

    render() {
        const { title, author, description, book, image, url } = this.props; 
        let bookDetails;
        if (this.state.book && title !== this.state.book.volumeInfo.title) {
            this.setState({
                book: null
            });
        } else if (this.state.book) {
            const { publisher, publishedDate, pageCount, printType, categories, averageRating } = this.state.book.volumeInfo;
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
                <a href={url} target="_blank">Read this book on GoogleBooks</a>
                <button 
                    type="button" 
                    onClick={(e) => {
                        e.preventDefault();
                        this.showBook(book);
                    }}    
                >Click to see more info on this book</button>
                {bookDetails}
            </li>
        );
    }
}

export default Book;