import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


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
      console.log("MobileClient id="+newProps.client.code+" componentWillReceiveProps");
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
      console.log(this.props.events)

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
            <button value={`edit${this.state.clientData.code}`} onClick = { ()=>this.props.events.emit('EEditClient', this.state.clientData.code) } >Edit</button>            
          </td>
          <td>
            <button value={`delete${this.state.clientData.code}`} onClick = { ()=>this.props.events.emit('EDeleteClient', this.state.clientData.code) } >Delete</button>
          </td>
        </tr>
      )
    };
  };