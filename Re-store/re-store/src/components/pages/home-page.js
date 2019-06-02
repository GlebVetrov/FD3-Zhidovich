import React from 'react';
import BookList from '../book-list'

import books from './books.json';

const HomePage = () => {
    return (
        <BookList books={books} />
    )
    {/*<div>Home Page</div>*/}
};

export default HomePage;