import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { booksLoaded, booksRequested, booksError } from '../../actions';
import { withBookstoreService } from '../hoc';
import compose from  '../../utils';
import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends React.Component {
    
    componentDidMount() {
        //1. получить данные
        const { bookstoreService,
                booksLoaded,
                booksRequested,
                booksError} = this.props;

        booksRequested();
        bookstoreService.getBooks()
            .then((data) => {
                booksLoaded(data);
            })
            .catch((err) => booksError(err));

        //2. передать(dispatch) действие в store

    }
    
    render() {
        const { books, loading, error } = this.props;
        if (loading) {
           return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <ul className='book-list'>
                {
                    books.map((book) => {                                            
                        return (<li key={book.isbn}>
                                    <BookListItem book = { book } />
                                </li>)
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
};

//подключение connect HOC из redux к BookList каие данные буду получать из redux-store
export default compose( 
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookList);