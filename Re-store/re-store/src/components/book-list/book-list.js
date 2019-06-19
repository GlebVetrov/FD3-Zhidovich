import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';

import { fetchBooks, bookAddedToCart } from '../../actions';
import { withBookstoreService } from '../hoc';
import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, str, onAddedToCart, items, pageNum }) => {
    
    books = books.slice(0, 50);
    console.log(pageNum);
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
        </ListGroup>
    )
};

class BookListContainer extends React.Component {

    state = {
        
    }
    
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, search, cartItems, onAddedToCart, pageNum } = this.props;
        
        if (loading) {
           return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return (<React.Fragment>
                    <ul>
                        <li><NavLink to="/1" className="PageLink" activeClassName="ActivePageLink">1-10</NavLink></li>
                        <li><NavLink to="/2" className="PageLink" activeClassName="ActivePageLink">10-20</NavLink></li>
                        <li><NavLink to="/3" className="PageLink" activeClassName="ActivePageLink">20-30</NavLink></li>
                        <li><NavLink to="/4" className="PageLink" activeClassName="ActivePageLink">30-40</NavLink></li>
                        <li><NavLink to="/5" className="PageLink" activeClassName="ActivePageLink">40-50</NavLink></li>
                        <li><NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">All</NavLink></li>
                    </ul>
                    <hr/>
                    <Container>
                        <BookList pageNum = { pageNum } items = { cartItems } str= { search } books={ books } onAddedToCart={ onAddedToCart }/>
                    </Container>
                </React.Fragment>)
    }
}

const mapStateToProps = (state, ownProps) => {
    
    let { pageNum } = ownProps;
    let { books, loading, error, search } = state.store.bookList;
    let { cartItems } = state.store.shoppingCart;
    return { books, loading, error, search, cartItems, pageNum };
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