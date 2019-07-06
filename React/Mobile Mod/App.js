"use strict";

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';

// import MobileCompany from './components/MobileCompany';
// import clients from './clients';

ReactDOM.render( 
    <BrowserRouter>
    <div>
      <PagesLinks />
      <PagesRouter />
    </div>
  </BrowserRouter>   
    // <MobileCompany clients={clients}/>
    , document.getElementById('container')
);
