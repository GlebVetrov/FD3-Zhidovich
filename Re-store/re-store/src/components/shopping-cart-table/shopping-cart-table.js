import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemoveFromCart, allBookRemoveFromCart } from '../../actions'

const ShoppingCartTable = ( props ) => {

    const {items, total, onIncrease, onDecrease, onDelete} = props;

    const renderRow = items.map((item, idx) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
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
                </td>
            </tr>
        )
    });

    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        renderRow
                    }
                </tbody>
            </table>
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