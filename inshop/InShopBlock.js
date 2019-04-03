var InShopBlock = React.createClass({

    displayName: 'InShopBlock',
  
    getDefaultProps: function() {
      return { question: "Вопрос ни о чём" }
    },
  
    render: function() {
  
      var goodsCode=[];
      this.props.goods.forEach(function (item) {
        var good=item;
        var goodCode=        
          React.DOM.div({key:good.code,className:'Good'},
            React.DOM.span({className:'Count'},good.count),
            React.DOM.span({className:'Item'},good.item),
            React.DOM.a({className:'PhotoURL', href: good.photoURL},good.text),
            React.DOM.span({className:'Cost'},good.cost),
            React.DOM.span({className:'Color'},good.color),            
          );
        goodsCode.push(goodCode);
      });
      return React.DOM.div( {className:'InShopBlock'},         
        React.DOM.div( {className:'Goods'}, goodsCode ),
      );
    },
  
  });