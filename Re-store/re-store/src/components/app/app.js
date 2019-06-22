import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { HomePage, CardPage } from '../pages/'
import ShopHeader from '../shop-header';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './app.css';

const Container = ({ location }) => {
    return (
      <React.Fragment>
          <TransitionGroup>
              <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
                  <Switch location={location}>
                        <Route path='/' exact component={HomePage}/>
                        <Route path='/cart' component={CardPage}/>
                        <Route path="/:clid" component={HomePage}/>
                  </Switch>
              </CSSTransition>
        </TransitionGroup>
      </React.Fragment>
    );
  }

const AnimationRoute = withRouter(Container);

export const App = ({orderTotal, cartItems}) => {
    let num = 0;
    if (cartItems.length !== 0 ) {        
        num =   cartItems.reduce((sum, current) => {
            return sum + current.count}, 0);
    }
    
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={num} total={orderTotal}/>
            <AnimationRoute/>
        </main>
    )
}

const mapStateToProps = (state) => {    
    return state.store.shoppingCart;
};

export default connect(mapStateToProps)(App);