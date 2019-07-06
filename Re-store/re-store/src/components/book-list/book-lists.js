import React from 'react';
import { ListGroup } from 'react-bootstrap';
import BookListItem from '../book-list-item';
 
const BookList = ({ books, str, onAddedToCart, items, pageNum }) => {
    
    pageNum = parseInt(pageNum);

    if (pageNum === 1) {
        books = books.slice(0, 10);
    }
    if (pageNum === 2) {
        books = books.slice(10, 20);
    }
    if (pageNum === 3) {
        books = books.slice(20, 30);
    }
    if (pageNum === 4) {
        books = books.slice(30, 40);
    }
    if (pageNum === 5) {
        books = books.slice(40, 50);
    }

    return (
        <ListGroup className='book-list'>
            {
                books.filter((book) => {
                    if (book.title.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
                        return true;
                    }
                    return false;
                }).map(( book ) => {
                    
                    if (items.length !== 0){
                        
                    for (let i = 0; i < items.length; i++) {
                        
                        if (items[i].id === book.id) {
                            
                            return (<li key={book.id}>
                                <BookListItem
                                    select = { true }
                                    book = { book }
                                    onAddedToCart={()=>{
                                       return onAddedToCart(book.id)}
                                    }
                                />
                            </li>)
                        }
                    }
                    }
                    return (<li key={book.id}>
                                <BookListItem
                                    select = { false }
                                    book = { book }
                                    onAddedToCart={()=>{
                                       return onAddedToCart(book.id)}
                                    }
                                />
                            </li>)
                        
                })
            }
        </ListGroup>
    )
};

export default BookList;