import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { fetchBooks, bookAddedToCart } from '../../actions';
import { withBookstoreService } from '../hoc';
import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, str, onAddedToCart, items }) => {

    books = books.slice(0, 51);
    
    return (
        <ul className='book-list'>
            {
                books.filter((book) => {
                    if (book.title.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
                        return true;
                    }
                    return false;
                }).map(( book ) => {
                    
                    if (items.length !== 0){
                        
                    for (let i = 0; i < items.length; i++) {
                        console.log(items.length);
                        if (items[i].id === book.id) {
                            console.log(items[i].id === book.id);
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
        </ul>
    )
};

class BookListContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchBooks();
    }
    
    render() {
        const { books, loading, error, search, cartItems, onAddedToCart } = this.props;
        
        if (loading) {
           return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList items = { cartItems } str= { search } books={ books } onAddedToCart={ onAddedToCart }/>;
    }
}

const mapStateToProps = (state) => {    
    let { books, loading, error, search } = state.store.bookList;
    let { cartItems } = state.store.shoppingCart;
    return { books, loading, error, search, cartItems };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart : (id) => {
            dispatch(bookAddedToCart(id));
        }
    }
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));