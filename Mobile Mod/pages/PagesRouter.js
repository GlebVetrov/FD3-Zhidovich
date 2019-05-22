import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_About from './Page_About';
import Page_Clients from './Page_Clients';


class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_About} />
        <Route path="/company" component={Page_Clients} />        
      </div>
    );
    
  }

}
    
export default PagesRouter;
    