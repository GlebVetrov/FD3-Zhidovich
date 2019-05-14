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
            })
          ),
    }

    state = {
        status: null,
        dataClients: this.props.clients,
        showData: 1,
        editClients: null,
        editNumber: null,
        freeCode: [this.props.clients.length + 1]
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
        
        this.setState({dataClients: clients, freeCode: freeCode})
    }

    editClient = (code) => {
        this.setState({editClients: 1, editNumber: code})
    }

    addClient = () => {
        let num = Math.min(...this.state.freeCode);
        this.setState({editClients: 2, editNumber: num})
    }

    cancel = () => {
        this.setState({editClients: null, editNumber: null})
    }

    saveClient = (client) => {
        let clients = this.state.dataClients;
        let status = this.state.editClients;
        if (status === 1){
        clients.map((v) => {
            if(v.code === client.code){
                return client;
            }
            return v;
        });
        } 
        if (status === 2) {
            let arr = [...this.state.freeCode];
            if (arr.length === 1) {
                let inc = arr[0] + 1;
                arr = [inc]
                this.setState({freeCode: arr});
            }
            if (arr.length !== 1) {
                let dec = arr.shift();                
                this.setState({freeCode: dec});
            }
            clients.push(client);
        }
        this.setState({dataClients: clients, editClients: null, editNumber: null});
    }

    componentDidMount = () => {
        eventEvents.addListener('EDeleteClient',this.deleteClient); 
        eventEvents.addListener('EEditClient',this.editClient); 
        eventEvents.addListener('ECancel',this.cancel);
        eventEvents.addListener('ESaveClient',this.saveClient);        
      };
    
      componentWillUnmount = () => {
        eventEvents.removeListener('EDeleteClient',this.deleteClient);
        eventEvents.removeListener('EEditClient',this.editClient);
        eventEvents.removeListener('ECancel',this.cancel); 
        eventEvents.removeListener('ESaveClient',this.saveClient);           
      };

    render() {
        console.log(this.state.editNumber)
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
        
        let editClient = this.state.editClients;

        if (editClient === 1) {
            let num = this.state.editNumber;
            
            let arr = this.state.dataClients.filter((v) => {
                if (v.code ===  num) {
                    return v;
                }});
            
            editClient = arr[0];
        
        } else if (editClient === 2) {
            
            editClient = {
                "code": Math.min(...this.state.freeCode),
                "name": "",
                "surname": "",
                "patronymic": "",
                "balance": 0
            };
        }
        console.log(editClient)
        
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
                      {this.state.editClients ? <MobileCard client={editClient}/> : <button onClick={this.addClient}>Добавить клиента</button>}
                    </div>
            </div>
        )
    }
    //key = {this.state.editNumber}
}

export default MobileCompany;