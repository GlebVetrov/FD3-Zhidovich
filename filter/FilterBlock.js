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
    
    changeStatus : function() {
        if (this.state.checkbox == true) {
            this.notSortWords();                    
            this.setState({checkbox: false,});
            return;
        }  else   {
            this.sortWords();
            this.setState({checkbox: true,});
            return;
        }

    },  

    notSortWords: function() {
        this.setState({words: this.props.text.map(function (item) {
            return item;
        }),});
        return; 
    },

    sortWords: function() {
        this.setState({words: this.state.words.sort(function (a, b) {
            if (a.text > b.text) {
              return 1;
            }
            if (a.text < b.text) {
              return -1;
            }
            return 0;
          }),});
        
    },

    clearField: function() {
        this.setState({text: ''});
        this.setState({checkbox: false,});
        this.notSortWords();
        return;
    },

    getInitialState: function() {
        return {
            text:'',
            words: this.props.text.map(function (item) {
                return item;
            }),            
            checkbox: false,
    }
    },

    checkAnswer: function(EO) {
        this.setState({text: EO.target.value});        
        return;
    },

    render: function() {

        var selectText = this.state.words.map( (v) => {                
                if (v.text.indexOf(this.state.text) != -1) {
                return React.DOM.option ({key: v.code}, v.text)
            }
        }
                
         );

        return React.DOM.div ({className: 'FilterBlock'},
        React.DOM.input ({className: 'FilterBlock_checkbox', type: 'checkbox', onClick: this.changeStatus, checked: this.state.checkbox}),
        React.DOM.input ({className: 'FilterBlock_text', type: 'text', value: this.state.text, onChange: this.checkAnswer}),
        React.DOM.input ({className: 'FilterBlock_button', type: 'button', value: 'Сброс', onClick: this.clearField}),
        React.DOM.br (),
        React.DOM.select ({className: 'FilterBlock_multiple', multiple: true, size: '5', },
        selectText
        ),
        )
    },
});