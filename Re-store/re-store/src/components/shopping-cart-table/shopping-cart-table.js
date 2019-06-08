import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                <tr>1</tr>
                <tr>Site Reliability Engineering</tr>
                <tr>2</tr>
                <tr>$40</tr>
                <tr>
                    <button className='btn btn-outline-danger btn-sm'>
                        <i className='fa fa-trash-o' />
                    </button>
                    <button className='btn btn-outline-success btn-sm'>
                        <i className='fa fa-plus-circle' />
                    </button>
                    <button className='btn btn-outline-warning btn-sm'>
                        <i className='fa fa-minus-circle' />
                    </button>
                </tr>
                </tbody>
            </table>
            <div className='total'>
                Total: $201
            </div>
        </div>
    )
}

export default ShoppingCartTable;