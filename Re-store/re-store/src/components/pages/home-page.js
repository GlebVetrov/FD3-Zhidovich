import React from 'react';
import BookList from '../book-list'
import SearchPanel from '../search-panel'

const HomePage = (props) => {
    
    return ( 
        <div>
            <SearchPanel/>
            <BookList pageNum = { props.match.params.clid } />
        </div>       
        
    )
};

export default HomePage;