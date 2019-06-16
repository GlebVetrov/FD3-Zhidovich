import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { fetchBooks, bookAddedToCart } from '../../actions';
import { withBookstoreService } from '../hoc';
import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className='book-list'>
            {
                books.map((book ) => {
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
        const { books, loading, error, onAddedToCart } = this.props;
        console.log(books);
        if (loading) {
           return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList books={ books } onAddedToCart={ onAddedToCart }/>;
    }
}

const mapStateToProps = (state) => {    
    let { books, loading, error } = state.store.bookList;
    return { books, loading, error };
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

//подключение connect HOC из redux к BookList каие данные буду получать из redux-store
export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));