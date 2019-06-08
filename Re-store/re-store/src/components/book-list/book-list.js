import React from 'react';
import BookListItem from '../book-list-item'
import { connect } from 'react-redux';

import './book-list';

class BookList extends React.Component {
    
    
    render() {
        const { books } = this.props;
        return (
            <ul>
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

//подключение connect HOC из redux к BookList каие данные буду получать из redux-store
export default connect(mapStateToProps)(BookList);