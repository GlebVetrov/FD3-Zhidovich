import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { fetchBooks, bookAddedToCart } from '../../actions';
import { withBookstoreService } from '../hoc';
import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, str, onAddedToCart }) => {
    console.log(str);
    return (
        <ul className='book-list'>
            {
                books.filter((book) => {
                    if (book.title.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
                        return true;
                    }
                    return false;
                }).map((book ) => {
                    return (<li key={book.id}>
                                <BookListItem
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
        const { books, loading, error, search, onAddedToCart } = this.props;
        console.log(books);
        if (loading) {
           return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList str= {search} books={ books } onAddedToCart={ onAddedToCart }/>;
    }
}

const mapStateToProps = (state) => {    
    let { books, loading, error, search } = state.store.bookList;
    return { books, loading, error, search };
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