import { createStore, combineReducers } from 'redux';

import reducer from './reducers';

const combinedReducer = combineReducers({
    store: reducer
});

const store = createStore(combinedReducer);

export default store;