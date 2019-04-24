import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import  Product from './product';


import './InShop2Block.css';

class InShop2Block extends React.Component {    

    static propTypes = {
      product: PropTypes.arrayOf(
        PropTypes.object.isRequired)
    };
    
    state = {      
        productData: this.props.product,
        productSelect: null,      
    };

    select = (num) => { 
      this.setState({
        productSelect: num,
      });    
      
    };

    delete = (EO, num) => {
      let del = this.state.productData;
      del = del.filter((obj, i) => {
        if (num != i ){
          return obj;
        }        
      } 
      );
      this.setState({productData: del})
      EO.stopPropagation();
    };

    render() {
      let select = this.state.productSelect;
            
      let productList = this.state.productData.map( (v,i) => 
                            
          <Product
             key = {v.code}
             num = {i}
             className = {i == select ? true : false}
             data = {v}
             cbDelete = {this.delete}
             cbSelect = {this.select}
            />
      
      
      );
  
      return (
        <div className = "InShop2Block">
          <div className = "InShop2Block_product" key = "555">
            <div className = 'InShop2Block_product_name'>Name</div>
            <div className = 'InShop2Block_product_prise'>Prise</div>
            <div className = 'InShop2Block_product_url'>URL</div>
            <div className = 'InShop2Block_product_quantity'>Quantity</div>
            <div className = 'InShop2Block_product_button'>Control</div>
         </div>
          {productList}
        </div>
      )      
    };
  
  };

  export default InShop2Block;