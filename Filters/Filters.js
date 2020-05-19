import React from 'react';

class Filters extends React.Component {
    render() {
        return (
            <fieldset>
                <label htmlFor="print-type">Print Type: </label>
                <select id="print-type">
                    <option value="">All</option>
                    <option value="BOOK">Book</option>
                    <option value="MAGAZINE">Magazine</option>
                </select>
                <label htmlFor="book-type">Book Type: </label>
                <select id="book-type">

                </select>
            </fieldset>
        );
    }
}