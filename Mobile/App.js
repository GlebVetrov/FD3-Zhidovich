"use strict";

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';
import MobileCompany2 from './components/MobileCompany2';
import clients from './clients';

ReactDOM.render(  
    <Fragment>
        <MobileCompany clients={clients}/>
        <MobileCompany2 clients={clients}/>        
    </Fragment>  
    
    , document.getElementById('container')
);
