import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer'

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './components/app'

const store = createStore(reducer);

ReactDOM.render(
        <Provider store={store}>
            <App></App>
        </Provider>
        ,
        document.getElementById('root')
        )
