import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import isoFetch from 'isomorphic-fetch';
import BookList from './book-lists';

import { bookAddedToCart, booksLoaded, booksError, booksRequested } from '../../actions';
import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookListContainer extends React.Component {

    state = {
        
    }
    
    componentDidMount() {        
        if (this.props.books.length === 0) {
            this.props.onRequested();
            this.loadData();
        }        
    }

    fetchError = (errorMessage) => {
        this.props.onError(errorMessage);
      };
    
      fetchSuccess = (loadedData) => {
        this.props.onLoaded(loadedData);
      };

    loadData = () => {
        let sp = new URLSearchParams();
        sp.append('f', 'READ');
        sp.append('n', 'GLEB_ITEM_INFO');

        return isoFetch("https://fe.it-academy.by/AjaxStringStorage2.php", {
                method: 'post',
                body: sp
            })
            .then( response => { // response - HTTP-ответ
                if (!response.ok)
                    throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
                else
                    return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
            })
            .then( data => { 
                data = JSON.parse(data.result).slice(0, 50);
                this.fetchSuccess(data);
            })
            .catch( error => {
                this.fetchError(error);
            }); 
      };

    render() {
        
        const { books, loading, error, search, cartItems, onAddedToCart, pageNum } = this.props;
        
        if (loading) {
           return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return (<React.Fragment>
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

const mapDispatchToProps = (dispatch) => {    
    return {
        onRequested: () => {
            dispatch(booksRequested());
        },
        onLoaded: (data) => {
            dispatch(booksLoaded(data));
        },
        onError: (err) => {
            dispatch(booksError(err));
        },
        onAddedToCart : (id) => {
            dispatch(bookAddedToCart(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);