import React from 'react';
import './book-list-item.css';
import { Button } from 'react-bootstrap';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, authors, price, thumbnailUrl } = book;
    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={thumbnailUrl} alt={'cover'}/>
            </div>
            <div className={'book-details'}>
                <span className='book-title'>{title}</span>
                <div className='book-author'>{authors}</div>
                <div className='book-price'>{price}</div>
                <Button onClick={onAddedToCart} variant="info">Add to cart</Button>
            </div>
        </div>
    )
} 

export default BookListItem;