import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoizee';

export default class MobileCard extends PureComponent {
   
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.surnameRef = React.createRef();
        this.patronymicRef = React.createRef();
        this.balanceRef = React.createRef();
    }

    static propTypes = {
        client:  PropTypes.shape({
            name: PropTypes.string.isRequired,
            surname: PropTypes.string.isRequired,
            patronymic: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
          }),
    }
    
    state = {
        clientData: this.props.client,
        clientId: this.props.client.code,
        saveButton: false,
        statusValidName: false,
        statusValidSurname: false,
        statusValidPatronymic: false,
        statusValidBalance: false,
    }

    saveClient = () => {
        let data = this.state.clientData;
        eventEvents.emit('ESaveClient', data);
    }

    cancel = () => {        
        eventEvents.emit('ECancel');
    }

    // changeProduct = (EO) => {
    //     if (EO.target.name === 'name') {
    //         if (EO.target.value === '') {
    //             this.setState({statusValidName: true});
    //         }
    //         else {
    //             this.setState({statusValidName: null});
    //         }
    //         let name = this.state.clientData;            
    //         name['name'] = EO.target.value;            
    //         this.setState({clientData: name}, this.checkForm);
    //         return;
    //     }
    //     if (EO.target.name === 'surname') {
    //         if (EO.target.value === '') {
    //             this.setState({statusValidSurname: true});
    //         }
    //         else {
    //             this.setState({statusValidSurname: null});
    //         }
    //         let surname = this.state.clientData;
    //         surname['surname'] = EO.target.value;            
    //         this.setState({clientData: surname}, this.checkForm);
    //         return;
    //     }
    //     if (EO.target.name === 'patronymic') {
    //         if (EO.target.value === '') {
    //             this.setState({statusValidPatronymic: true});
    //         }
    //         else {
    //             this.setState({statusValiPpatronymic: null});
    //         }
    //         let patronymic = this.state.clientData;
    //         patronymic['patronymic'] = EO.target.value;            
    //         this.setState({clientData: patronymic}, this.checkForm);
    //         return;
    //     }
    //     if (EO.target.name === 'balance') { 
    //         if (EO.target.value === '') {
    //             this.setState({statusValidBalance: true});
    //         }
    //         else {
    //             this.setState({statusValidBalance: null});
    //         }           
    //         let balance = this.state.clientData;
    //         balance['balance'] = parseInt(EO.target.value);            
    //         this.setState({clientData: balance}, this.checkForm);
    //         return;
    //     }
    // }

    focusTextInput = () => {
        // Установим фокус на текстовое поле с помощью чистого DOM API
        // Примечание: обращаемся к "current", чтобы получить DOM-узел
        this.nameRef.current.focus();
      }

    setNewText = () => {
        let newText= {...this.state.clientData};
        let changes = false;
      if ( this.nameRef) {     
        if(this.nameRef.current.value === '') {
            this.setState({statusValidName: true});
        } else {
            changes = true;
            newText.name = this.nameRef.current.value;
            this.setState({clientData: newText});            
        }
      }
      if ( this.surnameRef) {     
        if(this.surnameRef.current.value === '') {
            this.setState({statusValidSurname: true});
        }  else {
            changes = true;
            newText.surname = this.surnameRef.current.value;
            this.setState({clientData: newText});
        }
      }
      if ( this.patronymicRef) {     
        if(this.patronymicRef.current.value === '') {
            this.setState({statusValidPatronymic: true});
        }  else {
            changes = true;
            newText.patronymic = this.patronymicRef.current.value;
            this.setState({clientData:newText});
        }
      }
      if ( this.balanceRef) {     
        if(this.balanceRef.current.value === '') {
            this.setState({statusValidBalance: true});            
        }else {
            changes = true;
            newText.balance = parseInt(this.balanceRef.current.value);
            this.setState({clientData:newText});
        }
      }
      if (
      this.nameRef.current.value !== '' && 
      this.surnameRef.current.value !== '' && 
      this.patronymicRef.current.value !== '' && 
      this.balanceRef.current.value !== '' && changes === false
      ) {
        this.cancel();
      }
      if (
        this.nameRef.current.value !== '' && 
        this.surnameRef.current.value !== '' && 
        this.patronymicRef.current.value !== '' && 
        this.balanceRef.current.value !== '' && changes === true
        ) {         
          this.setState({clientData: newText}, this.saveClient);
        }
      
      return;
    };

    render() {
        
        console.log('render: MobileCard');
        console.log(this.props.events);

        return (            
            <div>
            {true && <h2>Edit Client</h2>}
            <p>ID:{this.state.clientData.code}</p>
            <p className={this.state.clientData.name}>
                <label>
                    Name<br/> <input type="text" name = "name"  defaultValue= {this.state.clientData.name} ref={this.nameRef}/>
                </label><br/>
            <span>{this.state.statusValidName && 'Please, fill the field'}</span></p>
            <p>
                <label>
                surname<br/> <input type="text" name = 'surname' defaultValue={this.state.clientData.surname} ref={this.surnameRef}/>
                </label><br/>
            <span>{this.state.statusValidSurname && 'Please, fill the field'}</span></p>
            <p>
                <label>
                patronymic<br/> <input type="text" name = 'patronymic' defaultValue={this.state.clientData.patronymic} ref={this.patronymicRef}/>
                </label><br/>
            <span>{this.state.statusValidPatronymic && 'Please, fill the field'}</span></p>
            <p>
                <label>
                balance<br/> <input type="text" name = 'balance' defaultValue={this.state.clientData.balance} ref={this.balanceRef}/>
                </label><br/>
            <span>{this.state.statusValidBalance && 'Please, fill the field'}</span></p>
                <p><input type="button" value="Save" disabled = {this.state.saveButton} onClick = {this.setNewText}/>
                <input type="button" value="Cancel" onClick = { ()=>this.props.events.emit('ECancel') }/></p>
            </div>            
        )
    }

}