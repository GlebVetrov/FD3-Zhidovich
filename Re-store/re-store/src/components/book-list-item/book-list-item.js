import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
    const { title, authors, thumbnailUrl: url } = book;
    return <React.Fragment>
        <span>{'Название: "' + title+'"  '}</span>
        <span>{'Автор: ' + authors}</span>
        <img src={url}/>
    </React.Fragment>
} 

export default BookListItem;