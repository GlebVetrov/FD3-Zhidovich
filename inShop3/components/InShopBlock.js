import React from 'react';
import PropTypes from 'prop-types';
import {testEvents} from './events';

import Product from './product';
import Card from './card';
import Test from './test';

import './InShopBlock.css';

class InShopBlock extends React.Component {

  static propTypes = {
    product: PropTypes.arrayOf(
      PropTypes.object.isRequired)
  };

  state = {
    productData: this.props.product, // данные о продуктах
    productSelect: null, // номер продукта который выбран
    productEditNum: null, // редактируется продукт?
    addProduct: false,
    editProduct: false,
    hello: 'hello'
  };

  componentDidMount = () => {
    testEvents.addListener('ESelect',this.select);
    testEvents.addListener('EDelete',this.delete);       
  };

  componentWillUnmount = () => {
    testEvents.removeListener('ESelect',this.select);
    testEvents.removeListener('EDelete',this.delete);    
  };

  select = (num) => {
    this.setState({
      productSelect: num, // номер выделеного продукта
      editProduct: false, // сброс режима редактированния
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

  edit = (EO, edit, num) => {
    this.setState({
     editProduct: edit, // режим редактирования
     productEditNum: num, //  номер редактируемого продукта
     productSelect: num, // сброс выделеого поля
    })
    EO.stopPropagation();
  }

  cancel = () => {
    this.setState({      
      editProduct: false, // сброс режима редактированния
      addProduct: false,
    });
  }

  editValue = (data, num) => {
    let add = this.state.productData;
    
    if (add.length >= num){
    
    add = add.map((obj, i) => {
      if (num - 1 == i) {
        return data;
      }
      else {
        return obj;
      }
    });    
    }
    else {
      add.push(data);
    }  

    this.setState({
      productData: add,
      addProduct: false,
      editProduct: false,
    })
    return;
  }

  addValue = () => { 
    let num = this.state.productData.length;
    this.setState({      
      editProduct: true,
      productEditNum: num,
      productSelect: null,
      addProduct: true
    })
    }

  render() {
    let select = this.state.productSelect;
        
    let productList = this.state.productData.map((v, i) =>

      {
        return <Product key={v.code} num={i} add = {this.state.addProduct} edit={this.state.editProduct} className={i == select ? true : false} data={v} cbDelete={this.delete} cbSelect={this.select} cbEdit={this.edit} />;
      }
    );
    // добавление нового продукта  
    let list = this.state.productData.slice(); //копирую массив

    let num = list.reduce((p, v) => { // уникальный ключ
      if (typeof(p) === 'object'){
      p = 0;}  
      
        return Math.max(p,v.code)
    });
    
    let newProduct = {
      "code": num + 1,
      "name": '',
      "prise": '',
      "url": '',
      "quantity": '',
    };

   if(this.state.addProduct){ list.push(newProduct)};
    let productCard = list.filter((v, i) => { //выбор нужного элемента
      if(i === this.state.productEditNum && this.state.editProduct) {
        return v;
      } // режим редактирования
      if(this.state.editProduct) {
        return;
      } // чтобы не добавлялся выбрвный элемент в массив
      if(i === this.state.productSelect) {        
        return v;
      } // режим выбора
    }).map((v, i) =>

    {
        return <Card edit={this.state.editProduct} key={v.code + i} num={v.code} add={this.state.addProduct} data={v} cbAdd={this.editValue} cbCancel={this.cancel} />;
      }
  )
  ;
    return ( 
    <div className = "InShopBlock" >
      <div className = "InShopBlock_product" key = "555" >
      <div className = 'InShopBlock_product_name' > Name </div> 
      <div className = 'InShopBlock_product_prise' > Prise </div> 
      <div className = 'InShopBlock_product_url' > URL </div> 
      <div className = 'InShopBlock_product_quantity' > Quantity </div> 
      <div className = 'InShopBlock_product_button' > Control </div> 
      </div> 
      {
        productList
      } 
      {
        (!this.state.editProduct || !this.state.addProduct) && <input type = 'button' value = 'New product' onClick = {this.addValue}/>
      }

      {
        productCard
      }
      <Test hello = {this.state.hello}/> 
    </div>
    )
  };

};

export default InShopBlock;