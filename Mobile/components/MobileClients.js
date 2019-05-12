import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {eventEvents} from './events';

class MobileClients extends Component {       

    static propTypes = {
        clients:  PropTypes.shape({
              name: PropTypes.string.isRequired,
              surname: PropTypes.string.isRequired,
              patronymic: PropTypes.string.isRequired,
              balance: PropTypes.number.isRequired,  
              status: PropTypes.bool.isRequired,
            }),             
    };

    state = {
        clientData: this.props.clients,
    }
    
    deleteClient = (EO) => {
      //this.props.cbSelected(this.props.code);
      eventEvents.emit('EDeleteClient', this.state.clientData.code);
    }

    edit = (EO) => {
      let edit = true;
      let num = this.props.num;
      this.props.cbEdit(EO, edit, num);
    }

    render() {
      let clientData = this.state.clientData;
      return (
        <tr>
          <td>{clientData.name}</td>
          <td>{clientData.surname}</td>
          <td>{clientData.patronymic}</td>
          <td>{clientData.balance}</td>
          <td>{clientData.status ? 'active' : 'blocked'}</td>
          <td>
            <input type = 'button' value = 'Edit'  onClick = {this.edit}/>
          </td>
          <td>
            <input type = 'button' value = 'Delete' onClick = {this.deleteClient}/>
          </td>
        </tr>
      )
    };
  };

  export default MobileClients;