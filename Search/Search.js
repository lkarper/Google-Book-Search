import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="search">Search: </label>
                <input type="text" id="search" name="search" required/>
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default Search;