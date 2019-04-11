var InShop2Block = React.createClass({

    displayName: 'InShop2Block',
    
    getInitialState: function () {
      return {
        product: [
          {text: product1, code: 1, delete: false}, 
          {text: product2, code: 2, delete: false},
          {text: product3, code: 3, delete: false}, 
          {text: product4, code: 4, delete: false},
          {text: product5, code: 5, delete: false},
        ],

        productData: [
          {
          className: 'InShop2Block_product',
          name: 'product1',
          prise: 30,
          url: 'http://product1.com',
          quantity: 20,
        },

        {
          className: 'InShop2Block_product',
          name: 'product2',
          prise: 15,
          url: 'http://product2.com',
          quantity: 20,  
        }
        ,

        {
          className: 'InShop2Block_product',
          name: 'product3',
          prise: 45,
          url: 'http://product3.com',
          quantity: 120,  
        }
        ,

        {
          className: 'InShop2Block_product',
          name: 'product4',
          prise: 55,
          url: 'http://product4.com',
          quantity: 220,  
        }
        ,

        {
          className: 'InShop2Block_product',
          name: 'product5',
          prise: 25,
          url: 'http://product5.com',
          quantity: 520,  
        }
      ],

      productLast: 0,

      }
    },

    select: function(num) {      
      let sel = this.state.productData.slice();
      let last = this.state.productLast;
      sel[last].className = 'InShop2Block_product';      
      sel[num].className = 'InShop2Block_product focused';      
      this.setState({productData: sel, productLast: num})
    },

    delete: function(num) {
      let del = this.state.product.slice();      
      del[num].delete = true;
      this.setState({product: del})
    },

    render: function() {

      var productList = this.state.product.map( (v, i) => {
        if (v.delete == false) {                    
          return React.createElement(v.text, {
             key: v.code, 
             data: this.state.productData[i],
             cbDelete: this.delete,
             cbSelect: this.select,
             num: i,
            });
      }
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
        productList
        );
      
    },
  
  });

//product 1
  var product1 = React.createClass({

    displayName: 'product1',    

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

    delete: function() {
      let num = this.props.num;      
      this.props.cbDelete(num);
    },

    render: function() {
      
      let productData = this.props.data;

      return React.DOM.div ({className: productData.className, key: productData.name, onClick: this.focused },
        React.DOM.div ({className: 'InShop2Block_product_name'}, productData.name),
        React.DOM.div ({className: 'InShop2Block_product_prise'}, productData.prise),
        React.DOM.div ({className: 'InShop2Block_product_url'}, productData.url),
        React.DOM.div ({className: 'InShop2Block_product_quantity'}, productData.quantity),
        React.DOM.div ({className: 'InShop2Block_product_button'}, 
          React.DOM.input ({type: 'button', value: 'Удалить',  onClick: this.delete})
        )
        );
    },
  });

//product 2
  var product2 = React.createClass({

    displayName: 'product2',    

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
    
    delete: function() {
      let num = this.props.num;
      this.props.cbDelete(num);
    },

    render: function() {

      let productData = this.props.data;

      return React.DOM.div ({className: productData.className, key: productData.name, onClick: this.focused},
        React.DOM.div ({className: 'InShop2Block_product_name'}, productData.name),
        React.DOM.div ({className: 'InShop2Block_product_prise'}, productData.prise),
        React.DOM.div ({className: 'InShop2Block_product_url'}, productData.url),
        React.DOM.div ({className: 'InShop2Block_product_quantity'}, productData.quantity),
        React.DOM.div ({className: 'InShop2Block_product_button'}, 
          React.DOM.input ({type: 'button', value: 'Удалить',  onClick: this.delete})
        )
        );
    },
  });

  //product 3
  var product3 = React.createClass({

    displayName: 'product3',  
    
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
    
    delete: function() {
      let num = this.props.num;
      this.props.cbDelete(num);
    },

    render: function() {

      let productData = this.props.data;

      return React.DOM.div ({className: productData.className, key: productData.name, onClick: this.focused},
        React.DOM.div ({className: 'InShop2Block_product_name'}, productData.name),
        React.DOM.div ({className: 'InShop2Block_product_prise'}, productData.prise),
        React.DOM.div ({className: 'InShop2Block_product_url'}, productData.url),
        React.DOM.div ({className: 'InShop2Block_product_quantity'}, productData.quantity),
        React.DOM.div ({className: 'InShop2Block_product_button'}, 
          React.DOM.input ({type: 'button', value: 'Удалить',  onClick: this.delete})
        )
        );
    },
  });
//product 4
  var product4 = React.createClass({

    displayName: 'product4', 
    
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
    
    delete: function() {
      let num = this.props.num;
      this.props.cbDelete(num);
    },

    render: function() {

      let productData = this.props.data;

      return React.DOM.div ({className: productData.className, key: productData.name, onClick: this.focused},
        React.DOM.div ({className: 'InShop2Block_product_name'}, productData.name),
        React.DOM.div ({className: 'InShop2Block_product_prise'}, productData.prise),
        React.DOM.div ({className: 'InShop2Block_product_url'}, productData.url),
        React.DOM.div ({className: 'InShop2Block_product_quantity'}, productData.quantity),
        React.DOM.div ({className: 'InShop2Block_product_button'}, 
          React.DOM.input ({type: 'button', value: 'Удалить',  onClick: this.delete})
        )
        );
    },
  });

  //product 5
  var product5 = React.createClass({

    displayName: 'product5',    

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
    
    delete: function() {
      let num = this.props.num;
      this.props.cbDelete(num);
    },

    render: function() {

      let productData = this.props.data;

      return React.DOM.div ({className: productData.className, key: productData.name, onClick: this.focused},
        React.DOM.div ({className: 'InShop2Block_product_name'}, productData.name),
        React.DOM.div ({className: 'InShop2Block_product_prise'}, productData.prise),
        React.DOM.div ({className: 'InShop2Block_product_url'}, productData.url),
        React.DOM.div ({className: 'InShop2Block_product_quantity'}, productData.quantity),
        React.DOM.div ({className: 'InShop2Block_product_button'}, 
          React.DOM.input ({type: 'button', value: 'Удалить',  onClick: this.delete})
        )
        );
    },
  });