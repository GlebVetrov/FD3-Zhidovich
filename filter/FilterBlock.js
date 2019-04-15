var FilterBlock = React.createClass({

    displayName: 'FilterBlock',
    
    propTypes: {
        text: React.PropTypes.arrayOf(
            React.PropTypes.shape({
              code: React.PropTypes.number.isRequired,              
              text: React.PropTypes.string.isRequired,              
            })
          ),
    },
    
    getInitialState: function() {
        return {
            sorted: false,
            filtered: '',
            processStr: this.props.text.slice(),
            }
    },
    
    processList: function(){
        let res = this.props.text;
        let sort = this.state.sorted;
        let filter = this.state.filtered;
        if(filter != '') {
            res = res.filter((s) => s.text.indexOf(filter) != -1)
        } else {
            res = this.props.text.slice();
        }

        if (sort === true) {
            res.sort(function (a, b) {
                return a.text.localeCompare(b.text);
                // if (a.text > b.text) {
                //   return 1;
                // }
                // if (a.text < b.text) {
                //   return -1;
                // }
                // return 0;
              })
        }
        this.setState({processStr: res});
    },
   
    changeStatus : function(EO) {
        this.setState({sorted: EO.target.checked}, this.processList);
    },  

    clearField: function() {
        this.setState({
            sorted: false,
            filtered: '',
        }, this.processList);
    },

    checkAnswer: function(EO) {        
        this.setState({filtered: EO.target.value}, this.processList);        
    },

    render: function() {

        var selectText = this.state.processStr.map( (v) => {
         return React.DOM.option ({key: v.code}, v.text)
        }
                
         );

        return React.DOM.div ({className: 'FilterBlock'},
        React.DOM.input ({className: 'FilterBlock_checkbox', type: 'checkbox', checked: this.state.sorted, onClick: this.changeStatus}),
        React.DOM.input ({className: 'FilterBlock_text', type: 'text', value: this.state.filtered, onChange: this.checkAnswer}),
        React.DOM.input ({className: 'FilterBlock_button', type: 'button', value: 'Сброс', onClick: this.clearField}),
        React.DOM.br (),
        React.DOM.select ({className: 'FilterBlock_multiple', multiple: true, size: '5', },
        selectText
        ),
        )
    },
});