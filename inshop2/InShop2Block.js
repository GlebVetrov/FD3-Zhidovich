var InShop2Block = React.createClass({

    displayName: 'InShop2Block',

    propTypes: {
      product: React.PropTypes.arrayOf(
        React.PropTypes.object.isRequired)
    },
    
    getInitialState: function () {
      return {
        productData: this.props.product.slice(),
        productLast: null,
      }
    },

    select: function(num) {      
      let sel = this.state.productData.slice();
      sel.forEach(element => element.className = 'InShop2Block_product');
      sel[num].className = 'InShop2Block_product focused';
      this.setState({productData: sel, productLast: num})
    },

    delete: function(EO, num) {      
      let del = this.state.productData;      
      delete del[num];
      this.setState({product: del})
      EO.stopPropagation();
    },

    render: function() {
      
      var productList = this.state.productData.map( (v,i) => {
                            
          return React.createElement(product, {
             key: v.code, 
             data: v,
             cbDelete: this.delete,
             cbSelect: this.select,
             num: i,
            });
      
      }
      )
  
      return React.DOM.div( {className:'InShop2Block'},
      React.DOM.div ({className: 'InShop2Block_product', key: '555' },
        React.DOM.div ({className: 'InShop2Block_product_name'}, 'Name'),
        React.DOM.div ({className: 'InShop2Block_product_prise'}, 'Prise'),
        React.DOM.div ({className: 'InShop2Block_product_url'}, 'URL'),
        React.DOM.div ({className: 'InShop2Block_product_quantity'}, 'Quantity'),
        React.DOM.div ({className: 'InShop2Block_product_button'}, 'Control')
        ),
        productList,        
        );
      
    },
  
  });

//product
  var product = React.createClass({

    displayName: 'product',    

    propTypes: {
      data: 
        React.PropTypes.shape({
          className: React.PropTypes.string.isRequired,
          name: React.PropTypes.string.isRequired,
          prise: React.PropTypes.number.isRequired,
          url: React.PropTypes.string.isRequired,
          quantity: React.PropTypes.number.isRequired,
        })
      ,
      cbDelete: React.PropTypes.func.isRequired,
      cbSelect: React.PropTypes.func.isRequired,
      num: React.PropTypes.number.isRequired,      
    },

    focused: function() {
      let num = this.props.num;      
      this.props.cbSelect(num);
    },

    delete: function(EO) {
      let num = this.props.num;      
      this.props.cbDelete(EO, num);
    },

    render: function() {
      
      let productData = this.props.data;

      return React.DOM.div ({className: productData.className, key: productData.name, onClick: this.focused },
        React.DOM.div ({className: 'InShop2Block_product_name'}, productData.name),
        React.DOM.div ({className: 'InShop2Block_product_prise'}, productData.prise),
        React.DOM.div ({className: 'InShop2Block_product_url'}, productData.url),
        React.DOM.div ({className: 'InShop2Block_product_quantity'}, productData.quantity),
        React.DOM.div ({className: 'InShop2Block_product_button'}, 
          React.DOM.input ({type: 'button', value: 'Delete',  onClick: this.delete})
        )
        );
    },
  });