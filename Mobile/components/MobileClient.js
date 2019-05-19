import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {eventEvents} from './events';

export default class MobileClients extends PureComponent {       

    static propTypes = {
        client:  PropTypes.shape({
              name: PropTypes.string.isRequired,
              surname: PropTypes.string.isRequired,
              patronymic: PropTypes.string.isRequired,
              balance: PropTypes.number.isRequired,
            }),             
    };

    state = {
        clientData: this.props.client,        
    }

    componentWillReceiveProps = (newProps) => {
      console.log("MobileClient id="+this.props.client.code+" componentWillReceiveProps");
    this.setState({editMode:newProps.edit});
    }

    componentDidUpdate = (oldProps, oldState) => {      
      if ( oldProps.client!==this.props.client )  {
          this.setState({clientData: this.props.client});
      }
    }

    deleteClient = (EO) => {
      eventEvents.emit('EDeleteClient', this.state.clientData.code);
    }

    editClient = (EO) => {
      eventEvents.emit('EEditClient', this.state.clientData.code);
    }

    render() {

      console.log('render: MobileClients id=' +this.props.client.code)

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
            <button onClick = {this.editClient} >Edit</button>            
          </td>
          <td>
            <button onClick = {this.deleteClient} >Delete</button>
          </td>
        </tr>
      )
    };
  };