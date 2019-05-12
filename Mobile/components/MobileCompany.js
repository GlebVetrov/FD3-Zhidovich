import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MobileClients from './MobileClients';
import MobileCard from './MobileCard';
import {eventEvents} from './events';

class MobileCompany extends Component {
    static propTypes = {
        clients: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              surname: PropTypes.string.isRequired,
              patronymic: PropTypes.string.isRequired,
              balance: PropTypes.number.isRequired,  
              status: PropTypes.bool.isRequired,
            })
          ),
    }

    state = {
        status: null,
        dataClients: this.props.clients,
        showData: 1,
        editClients: null,
        editNumber: null,
        freeCode: [this.props.clients.lenght]
    }

    setVelcom = () => {
        let velcom = 1;
        this.setState({status: velcom})
    }

    setMtc = () => {
        let mtc = 2;
        this.setState({status: mtc})
    }

    showAll = () => {
        this.setState({showData: 1})
    }

    showActive = () => {
        this.setState({showData: 2})
    }

    showBlocked = () => {
        this.setState({showData: 3})
    }

    deleteClient = (code) => {
        let freeCode = this.state.freeCode.slice();
        let clients = this.state.dataClients.filter((v) => {
            if (v.code !== code) { 
                return v;
            }
        });
        freeCode.push(code);
        console.log()
        this.setState({dataClients: clients, freeCode: freeCode})
    }

    editClient = () => {
        this.setState({editClients: 1})
    }

    addClient = () => {
        this.setState({editClients: 2})
    }

    componentDidMount = () => {
        eventEvents.addListener('EDeleteClient',this.deleteClient);        
      };
    
      componentWillUnmount = () => {
        eventEvents.removeListener('EDeleteClient',this.deleteClient);        
      };

    render() {

        let showData = this.state.showData;

        let clients = this.state.dataClients.filter((v) => {
            if(showData === 1) {
                return v;
            }
            if(showData === 2 && v.status === true ) {
                return v;
            }
            if(showData === 3 && v.status === false) {
                return v;
            }            
        })
        .map((v) => {
            return <MobileClients key={v.code} clients={v}/>
        })
        
        let editClient = 1;

        if (editClient) {
            editClient = this.state.dataClients.filter((v) => {
                if (v.code ===  editClient) {
                    return v;
                }
        });
        } else if (0) {
            editClient = 1;
        }

        console.log(this.state.showData)
        return (
            <div className='MobileCompany'>
                    <div>
                        <button onClick={this.setVelcom}>Velcom</button>
                        <button onClick={this.setMtc}>MTC</button>
                        <br/>
                        Компания:
                        {this.state.status === 1 && 'Velcom'}
                        {this.state.status === 2 && 'MTC'}
                        </div>                    
                        <hr/>
                    <div>
                        <button onClick={this.showAll}>Все</button>
                        <button onClick={this.showActive}>Активные</button>
                        <button onClick={this.showBlocked}>Заблокированные</button>
                    </div>
                        <hr/>
                    <div>
                        <table>
                            <tbody>
                                <tr key={555}>
                                    <th>Фамилия</th>
                                    <th>Имя</th>
                                    <th>Отчетво</th>
                                    <th>Баланс</th>
                                    <th>Статус</th>
                                    <th>Редактировать</th>
                                    <th>Удалить</th>
                                </tr>
                                {clients}
                            </tbody>
                        </table>
                    </div>
                    <div>
                      {this.state.editClients ? null : <button onClick={this.addClient}>Добавить клиента</button>}
                      <MobileCard client={editClient}/>
                    </div>
            </div>
        )
    }
}

export default MobileCompany;