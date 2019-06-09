import React from 'react';
import './book-list-item.css';

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
                <button onClick={onAddedToCart}
                    className='btn btn-info add-to-cart'>Add to cart</button>
            </div>
        </div>
    )
} 

export default BookListItem;