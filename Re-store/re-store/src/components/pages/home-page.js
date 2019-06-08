import React from 'react';
import BookList from '../book-list'
import ShoppingCartTable from '../shopping-cart-table';

import books from './books.json';

const HomePage = () => {
    return (
        <div>
            <BookList />
            <ShoppingCartTable/>
        </div>
    )
};

export default HomePage;