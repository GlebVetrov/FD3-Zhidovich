"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import InShop2Block from './components/InShop2Block.js';
import productList from './product-date.json' ;

ReactDOM.render(
    <InShop2Block
    product = {productList}
    />
    
    , document.getElementById('container')
);
