"use strict";

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';
import clients from './clients';

ReactDOM.render(    
    <MobileCompany clients={clients}/>
    , document.getElementById('container')
);
