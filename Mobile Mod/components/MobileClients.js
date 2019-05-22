import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {eventEvents} from './events';

export default class MobileClients extends PureComponent {       

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
        editMode: this.props.edit,
    }
    
    // shouldComponentUpdate = (newProps,newState) => {
    //   console.log("MobileClient id="+newProps.clients.name+" shouldComponentUpdate"+newState.clients.name);
    // };

    componentWillReceiveProps (newProps) {
      console.log("MobileClient id="+this.props.clients.code+" componentWillReceiveProps");    
    }

    componentDidUpdate (oldProps, oldState) {      
      if ( oldProps.clients!==this.props.clients )  {
          this.setState({clientData: this.props.clients});
      }
    }

    deleteClient = (EO) => {
      eventEvents.emit('EDeleteClient', this.state.clientData.code);
    }

    editClient = (EO) => {
      eventEvents.emit('EEditClient', this.state.clientData.code);
    }

    render() {

      console.log('render: MobileClients id=' +this.props.clients.code)
      console.log('render: MobileClients id=' +this.props.clients.name)

      let clientData = this.state.clientData;
      let edit = this.state.editMode;
      return (
        <tr>
          <td>{clientData.name}</td>
          <td>{clientData.surname}</td>
          <td>{clientData.patronymic}</td>
          <td>{clientData.balance}</td>
          <td>{clientData.balance >= 0 ? 'active' : 'blocked'}</td>
          <td>
            <button disabled={edit} onClick = {this.editClient} >Edit</button>            
          </td>
          <td>
            <button disabled={edit} onClick = {this.deleteClient} >Delete</button>
          </td>
        </tr>
      )
    };
  };