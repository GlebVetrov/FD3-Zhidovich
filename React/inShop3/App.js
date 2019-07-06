"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import InShopBlock from './components/InShopBlock.js';
import productList from './product-date.json' ;

ReactDOM.render(
    <InShopBlock
    product = {productList}
    />
    
    , document.getElementById('container')
);
