"use strict";

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';
import clients from './clients';

ReactDOM.render(  
    <Fragment>
        <MobileCompany clients={clients}/>
    </Fragment>  
    
    , document.getElementById('container')
);
