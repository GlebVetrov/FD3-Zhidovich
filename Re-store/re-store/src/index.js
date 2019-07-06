import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/';
import ErrorBoundry from './components/error-boundry';



import store from './store';



ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>            
                <BrowserRouter>                            
                            <App/>
                </BrowserRouter>            
        </ErrorBoundry>                
    </Provider>,
    document.getElementById('root')
);