import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { booksLoaded } from '../../actions';
import { withBookstoreService } from '../hoc';
import compose from  '../../utils';
import './book-list.css';

class BookList extends React.Component {
    
    componentDidMount() {
        //1. получить данные
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        console.log(data);

        //2. передать(dispatch) действие в store
        this.props.booksLoaded(data);
    }
    
    render() {
        const { books } = this.props;
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

const mapStateToProps = ({ books }) => {
    return { books }
}

const mapDispatchToProps = {
    booksLoaded
}

//подключение connect HOC из redux к BookList каие данные буду получать из redux-store
export default compose( 
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookList);