import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
    const { title, author, price, thumbnailUrl } = book;
    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={thumbnailUrl} alt={'cover'}/>
            </div>
            <div className={'book-details'}>
                <a href='#' className='book-title'>{title}</a>
                <div className='book-author'>{author}</div>
                <div className='book-price'>{price}</div>
                <button className='btn btn-info add-to-cart'>Add to cart</button>
            </div>
        </div>
    )
} 

export default BookListItem;