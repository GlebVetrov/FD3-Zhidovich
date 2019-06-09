import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { fetchBooks } from '../../actions';
import { withBookstoreService } from '../hoc';
import compose from  '../../utils';
import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books }) => {
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
};

class BookListContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchBooks();
    }
    
    render() {
        const { books, loading, error } = this.props;
        if (loading) {
           return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList books={ books } />;
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
};

//подключение connect HOC из redux к BookList каие данные буду получать из redux-store
export default compose( 
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer);