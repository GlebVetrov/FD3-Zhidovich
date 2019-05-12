import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class MobileCard extends Component {
   
    static propTypes = {
        clients:  PropTypes.shape({
            name: PropTypes.string.isRequired,
            surname: PropTypes.string.isRequired,
            patronymic: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,  
            status: PropTypes.bool.isRequired,
          }),
    }
    
    state = {
        clientData: this.props.client[0],
        clientId: 1,
        disButton: true,
        statusValidName: false,
        statusValidSurname: false,
        statusValidPatronymic: false,
        statusValidBalance: false,
        statusValidStatus: false,
    }

    // addValue = () => {
    //     let data = this.state.clientData;
    //     let num = this.state.clientId;
        
    //     this.props.cbAdd(data, num);
    // }

    // cancel = () => {        
    //     this.props.cbCancel();
    // }

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
    //         balance['balance'] = EO.target.value;            
    //         this.setState({clientData: balance}, this.checkForm);
    //         return;
    //     }
    // }

    // checkForm = () => {
    //     let obj = this.state.clientData;
        
    //     for (let key in obj) {
    //         if (obj[key] === '') {
    //               this.setState({disButton: true});
    //               return;
    //         }
    //     }

    //     this.setState({disButton: false});
    //     return;
    // }

    render() {
        let data = this.state.clientData;
        console.log(data[0]);
        return (            
            <div>
            {true && <h2>Edit Client</h2>}
            <p>ID:{this.state.clientData.code}</p>
            <p>
                <label>
                    Name<br/> <input type="text" name = "name"  defaultValue= {this.state.clientData.name} onChange = {this.changeProduct}/>
                </label><br/>
            <span>{this.state.statusValidName && 'Please, fill the field'}</span></p>
            <p>
                <label>
                surname<br/> <input type="text" name = 'surname' defaultValue={this.state.clientData.surname} onChange = {this.changeProduct}/>
                </label><br/>
            <span>{this.state.statusValidSurname && 'Please, fill the field'}</span></p>
            <p>
                <label>
                patronymic<br/> <input type="text" name = 'patronymic' defaultValue={this.state.clientData.patronymic} onChange = {this.changeProduct}/>
                </label><br/>
            <span>{this.state.statusValidPatronymic && 'Please, fill the field'}</span></p>
            <p>
                <label>
                balance<br/> <input type="text" name = 'balance' defaultValue={this.state.clientData.balance} onChange = {this.changeProduct}/>
                </label><br/>
            <span>{this.state.statusValidBalance && 'Please, fill the field'}</span></p>
            <p><input type="button" value="Save" disabled = {this.state.disButton} onClick = {this.addValue}/><input type="button" value="Cansel" onClick = {this.cancel}/></p>
            </div>            
        )
    }
}