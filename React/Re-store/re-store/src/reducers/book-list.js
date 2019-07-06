const updateBookList = (state, action) => {
    if (state === undefined) {
        return {
            books: [],
            search: '',
            loading: true,
            error: null
        }
    }     
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                books: [],
                search: '',
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.payload,
                search: '',
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [],
                search: '',
                loading: false,
                error: action.payload
            };
         case 'FETCH_BOOKS_SEARCH':
                    return {
                        ...state.bookList,
                        search: action.payload,
                    };
        default:
            return state.bookList;
    }

};

export default updateBookList;