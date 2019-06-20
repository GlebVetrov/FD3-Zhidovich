import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemoveFromCart, allBookRemoveFromCart } from '../../actions';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import { Container, ListGroup } from 'react-bootstrap';

const ShoppingCartTable = ( props ) => {

    const {items, total, onIncrease, onDecrease, onDelete} = props;

    const renderRow = items.map((item, idx) => {
        const {id, title, count, total} = item;
        return (
            <CSSTransition key={id} timeout={500} classNames="item" >
            
                <ListGroup.Item className='shopping-cart-list'>
                    <div>{idx + 1}</div>
                    <div>{title}</div>
                    <div>{count}</div>
                    <div>{total}</div>
                    <div>
                        <button onClick={() => onDelete(id)}
                                className='btn btn-outline-danger btn-sm'>
                            <i className='fa fa-trash-o'/>
                        </button>
                        <button onClick={() => onIncrease(id)}
                                className='btn btn-outline-success btn-sm'>
                            <i className='fa fa-plus-circle'/>
                        </button>
                        <button onClick={() => onDecrease(id)}
                                className='btn btn-outline-warning btn-sm'>
                            <i className='fa fa-minus-circle'/>
                        </button>
                    </div>
                </ListGroup.Item>
            
            </CSSTransition>
        )
    });

    return (
        <div className='shopping-cart-table'>        
            <h2>Your Order</h2>
            <div> 
            <Container>               
                <ListGroup>
                   
                        <ListGroup.Item className='shopping-cart-list'>
                            <div>#</div>
                            <div>Item</div>
                            <div>Count</div>
                            <div>Price</div>
                            <div>Action</div>
                        </ListGroup.Item>            
                     <TransitionGroup>
                        {
                            renderRow
                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
            </div>
            <div className='total'>
                Total: ${total}
            </div>        
        </div>
    )
};

const mapStateToProps = (state) => {
    let {
        cartItems: items,
        orderTotal: total
    } = state.store.shoppingCart;
    return {
        items,
        total
    };
};

const mapDispatchToProps = {
        onIncrease: bookAddedToCart,
        onDecrease: bookRemoveFromCart,
        onDelete: allBookRemoveFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);