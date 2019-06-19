import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CardPage } from '../pages/'
import ShopHeader from '../shop-header';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import './app.css';

const App = ({orderTotal, cartItems}) => {
    let num = 0;
    if (cartItems.length !== 0 ) {        
        num =   cartItems.reduce((sum, current) => {
            return sum + current.count}, 0);
    }
    
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={num} total={orderTotal}/>
            <Switch>
                <Route path='/' exact component={HomePage}></Route>
                <Route path='/cart' component={CardPage}></Route>
                <Route path="/:clid" component={HomePage}></Route>
            </Switch>
        </main>
    )
}

const mapStateToProps = (state) => {    
    return state.store.shoppingCart;
};

export default connect(mapStateToProps)(App);