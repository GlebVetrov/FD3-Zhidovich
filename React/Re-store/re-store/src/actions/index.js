
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
};

const bookRemoveFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVE_FROM_CART',
        payload: bookId
    }
};

const bookSearch = (str) => {
    return {
        type: 'FETCH_BOOKS_SEARCH',
        payload: str
    }
}

const allBookRemoveFromCart = (bookId) => {
    return {
        type: 'ALL_BOOK_REMOVE_FROM_CART',
        payload: bookId
    }
};


export {    
    bookAddedToCart,
    bookRemoveFromCart,
    allBookRemoveFromCart,
    bookSearch,
    booksLoaded,
    booksError,
    booksRequested
};