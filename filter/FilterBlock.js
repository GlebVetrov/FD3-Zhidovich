var FilterBlock = React.createClass({

    displayName: 'FilterBlock',
    
    propTypes: {

    },

    clearField: function() {
        this.setState({text: ''});
    },

    getInitialState: function() {
        return {text:''}
    },

    checkAnswer: function(EO) {
        this.setState({text: EO.target.value});
        console.log('Вы набрали:' + this.state.text);
    },

    render: function() {

        var selectText = this.props.text.map( (v) => {
                if (v.text.indexOf(this.state.text) != -1) {
                return React.DOM.option ({key: v.code}, v.text)
            }
        }
                
         );

        return React.DOM.div ({className: 'FilterBlock'},
        React.DOM.input ({type: 'checkbox'}),
        React.DOM.input ({type: 'text', defaultValue: this.state.text, onChange: this.checkAnswer}),
        React.DOM.input ({type: 'button', value: 'Сброс', onClick: this.clearField}),
        React.DOM.select ({multiple: true, size: '5', },
        selectText
        ),
        )
    },
});