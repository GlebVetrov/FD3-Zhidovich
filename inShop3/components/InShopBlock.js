import React from 'react';
import PropTypes from 'prop-types';


import Product from './product';
import Card from './card';

import './InShopBlock.css';

class InShopBlock extends React.Component {

  static propTypes = {
    product: PropTypes.arrayOf(
      PropTypes.object.isRequired)
  };

  state = {
    productData: this.props.product, // данные о продуктах
    productSelect: null, // номер продукта который выбран
    productEdit: null, // редактируется продукт?
  };

  select = (num) => {
    this.setState({
      productSelect: num,
    });

  };

  delete = (EO, num) => {
    let del = this.state.productData;
    del = del.filter((obj, i) => {
      if (num != i) {
        return obj;
      }
    });
    this.setState({
      productData: del
    })
    EO.stopPropagation();
  };

  addValue = () => {
    let add = this.state.productData;
    add = add.map((obj, i) => {
      if (num == i) {
        return obj;
      }
    });
    this.setState({
      productData: del
    })
    EO.stopPropagation();
  }

  render() {
    let select = this.state.productSelect;

    let productList = this.state.productData.map((v, i) =>

      <Product 
      key = {
        v.code
      }
      num = {
        i
      }
      className = {
        i == select ? true : false
      }
      data = {
        v
      }
      cbDelete = {
        this.delete
      }
      cbSelect = {
        this.select
      }
      />
    );
      
    let productCard = this.state.productData.map((v, i) =>

    <Card 
    key = {
      v.code
    }

    num = {
      i + 1
    }

    data = {
      v
    }

    cbAdd = {
      this.addValue
    }
    />
  )
  .filter((v, i) => {
    if(i === this.state.productSelect) {
      return <Card/>;
    }
  })
  ;
 
    return ( <div className = "InShopBlock" >
      <div className = "InShopBlock_product"
      key = "555" >
      <div className = 'InShopBlock_product_name' > Name </div> 
      <div className = 'InShopBlock_product_prise' > Prise </div> 
      <div className = 'InShopBlock_product_url' > URL </div> 
      <div className = 'InShopBlock_product_quantity' > Quantity </div> 
      <div className = 'InShopBlock_product_button' > Control </div> 
      </div> {
        productList
      } {
        <
        input type = 'button'
        value = 'New product' / >
      }

      {
        productCard
      } </div>
    )
  };

};

export default InShopBlock;