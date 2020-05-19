import React from 'react';
import './Form.css';

const Form = (props) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const term = document.getElementById('search').value;
                const printType = document.getElementById('print-type').value;
                const bookType = document.getElementById('book-type').value;
                props.onSearch(term, printType, bookType);
            }}
        >
            <fieldset className="search-box">
                <label htmlFor="search">Search: </label>
                <input type="text" id="search" name="search" required/>
                <button type="submit">Search</button>
            </fieldset>
            <fieldset className="filters-box">
                <label htmlFor="print-type">Print Type: </label>
                <select id="print-type">
                    <option value="all">All</option>
                    <option value="books">Book</option>
                    <option value="magazines">Magazine</option>
                </select>
                <label htmlFor="book-type">Book Type: </label>
                <select id="book-type">
                    <option value="">No filter</option>
                    <option value="partial">Partial text viewable</option>
                    <option value="full">Full text viewable</option>
                    <option value="ebooks">Ebook</option>
                    <option value="free-ebook">Free ebook</option>
                    <option value="paid-ebook">Paid ebook</option>
                </select>
            </fieldset>
        </form>
    );
}

export default Form;