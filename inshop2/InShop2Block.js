var InShop2Block = React.createClass({

    displayName: 'InShop2Block',

    propTypes: {
      product: React.PropTypes.arrayOf(
        React.PropTypes.object.isRequired)
    },
    
    getInitialState: function () {
      return {
        productData: this.props.product.slice(),
        productSelect: null,
      }
    },

    select: function(num) { 
      this.setState({
        productSelect: num,
      });    
      
    },

    delete: function(EO, num) {      
      let del = this.state.productData;      
      delete del[num];
      this.setState({product: del})
      EO.stopPropagation();
    },

    render: function() {
      let select = this.state.productSelect;
      let selectClass = 'InShop2Block_product focused';

      let productList = this.state.productData.map( (v,i) => {
                            
          return React.createElement(product, {
             key: v.code,
             num: i,
             className: i == select ? selectClass : v.className, 
             data: v,
             cbDelete: this.delete,
             cbSelect: this.select,             
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
      let classPro = this.props.className;

      return React.DOM.div ({className: classPro, key: productData.name, onClick: this.focused },
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