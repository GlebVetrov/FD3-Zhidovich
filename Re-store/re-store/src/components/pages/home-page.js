import React from 'react';
import BookList from '../book-list'
import SearchPanel from '../search-panel'

const HomePage = () => {
    return ( 
        <div>
            <SearchPanel></SearchPanel>
            <BookList />
        </div>       
        
    )
};

export default HomePage;