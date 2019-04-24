import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

class Product extends React.Component {       

    static propTypes = {
      data: 
        PropTypes.shape({          
          name: PropTypes.string.isRequired,
          prise: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
        })
      ,
      cbDelete: PropTypes.func.isRequired,
      cbSelect: PropTypes.func.isRequired,
      num: PropTypes.number.isRequired,      
    };

    focused = () => {
      let num = this.props.num;      
      this.props.cbSelect(num);
    };

    delete = (EO) => {
      let num = this.props.num;      
      this.props.cbDelete(EO, num);
    };

    render() {
      
      let productData = this.props.data;

      let isSelectClass = 'InShop2Block_product focused',
          noSelectClass = 'InShop2Block_product';

      let classPro = this.props.className ? isSelectClass : noSelectClass;

      
      return (
        <div className = {classPro} key = {productData.name} onClick = {this.focused}>
          <div className = 'InShop2Block_product_name'>{productData.name}</div>
          <div className = 'InShop2Block_product_prise'>{productData.prise}</div>
          <div className = 'InShop2Block_product_url'>{productData.url}</div>
          <div className = 'InShop2Block_product_quantity'>{productData.quantity}</div>
          <div className = 'InShop2Block_product_button'>
            <input type = 'button' value = 'Delete'  onClick = {this.delete}/>
          </div>
        </div>
      )

      // return DOM.div ({className: classPro, key: productData.name, onClick: this.focused },
      //   DOM.div ({className: 'InShop2Block_product_name'}, productData.name),
      //   DOM.div ({className: 'InShop2Block_product_prise'}, productData.prise),
      //   DOM.div ({className: 'InShop2Block_product_url'}, productData.url),
      //   DOM.div ({className: 'InShop2Block_product_quantity'}, productData.quantity),
      //   DOM.div ({className: 'InShop2Block_product_button'}, 
      //     DOM.input ({type: 'button', value: 'Delete',  onClick: this.delete})
      //   )
      //   );
    };
  };

  export default Product;