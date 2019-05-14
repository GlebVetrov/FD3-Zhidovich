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
            }),             
    };

    state = {
        clientData: this.props.clients,
    }
    
    deleteClient = (EO) => {
      eventEvents.emit('EDeleteClient', this.state.clientData.code);
    }

    editClient = (EO) => {
      eventEvents.emit('EEditClient', this.state.clientData.code);
    }

    render() {

      let clientData = this.state.clientData;

      return (
        <tr>
          <td>{clientData.name}</td>
          <td>{clientData.surname}</td>
          <td>{clientData.patronymic}</td>
          <td>{clientData.balance}</td>
          <td>{clientData.balance >= 0 ? 'active' : 'blocked'}</td>
          <td>
            <input type = 'button' value = 'Edit'  onClick = {this.editClient}/>
          </td>
          <td>
            <input type = 'button' value = 'Delete' onClick = {this.deleteClient}/>
          </td>
        </tr>
      )
    };
  };

  export default MobileClients;