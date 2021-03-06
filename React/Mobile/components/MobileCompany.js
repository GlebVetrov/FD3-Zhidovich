import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import MobileCard from './MobileCard';
import memoize from 'memoizee';
import {EventEmitter} from 'events';

// let eventEvents = new EventEmitter();

export default class MobileCompany extends PureComponent {
    constructor(props) {
        super(props);
        this.eventEvents = new EventEmitter();
    }

    static propTypes = {
        clients: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              surname: PropTypes.string.isRequired,
              patronymic: PropTypes.string.isRequired,
              balance: PropTypes.number.isRequired,
            })
          ),
    };
    

    state = {
        status: null,
        dataClients: this.props.clients,
        showData: 1,
        editClients: null,
        editNumber: null,
        freeCode: [this.props.clients.length + 1],
        inputBox: true
    };

    

    setVelcom = () => {
        let velcom = 1;
        this.setState({status: velcom})
    };

    setMtc = () => {
        let mtc = 2;
        this.setState({status: mtc});
    };

    showAll = () => {
        let show = 1;
        this.setState({showData: show});
    };

    showActive = () => {
        let show = 2;
        this.setState({showData: show})
    };

    showBlocked = () => {
        let show = 3;
        this.setState({showData: show})
    };

    deleteClient = (code) => {
        let freeCode = this.state.freeCode.slice();
        let clients = this.state.dataClients.filter((v) => {
            if (v.code !== code) { 
                return v;
            }
        });
        freeCode.push(code);
        
        this.setState({dataClients: clients, freeCode: freeCode})
    };

    editClient = (code) => {
        this.setState({editClients: 1, editNumber: code})
    };

    addClient = () => {
        let num = Math.min(...this.state.freeCode);
        this.setState({editClients: 2, editNumber: num})
    };

    cancel = () => {
        this.setState({editClients: null, editNumber: null})
    };

    saveClient = (client) => {
        console.log(client);
        let clients = this.state.dataClients.slice();
        let status = this.state.editClients;     
        
        if (status === 1){
        clients = clients.map((v) => {
            console.log(v.code);
            if(v.code === client.code){  
                let newClient = {...client};
                return newClient;
            }
            return v;
        });
        }
        
        if (status === 2) {
            let arr = [...this.state.freeCode];
            if (arr.length === 1) {
                let inc = arr[0] + 1;
                arr = [inc];
                this.setState({freeCode: arr});
            }
            if (arr.length !== 1) {
                let dec = arr.shift();                
                this.setState({freeCode: dec});
            }
            clients.push(client);
        }
        
        console.log(clients);

        this.setState({dataClients: clients, editClients: null, editNumber: null});
    };
    
    componentDidMount = () => {
        
        this.eventEvents.addListener('EDeleteClient',this.deleteClient); 
        this.eventEvents.addListener('EEditClient',this.editClient); 
        this.eventEvents.addListener('ECancel',this.cancel);
        this.eventEvents.addListener('ESaveClient',this.saveClient);        
      };
    
      componentWillUnmount = () => {
        this.eventEvents.removeListener('EDeleteClient',this.deleteClient);
        this.eventEvents.removeListener('EEditClient',this.editClient);
        this.eventEvents.removeListener('ECancel',this.cancel); 
        this.eventEvents.removeListener('ESaveClient',this.saveClient);           
      };

      checkBox = () => {
            console.log('box');
            this.setState({inputBox: false})
      }

    render() {

        console.log('render: MobileCompany');
        
        let showData = this.state.showData;
        
        let clients = [...this.state.dataClients];
        let sort = (clients) => {
            
            return clients.filter((v) => {
            if(showData === 1) {
                return v;
            }
            if(showData === 2 && v.balance >= 0 ) {
                return v;
            }
            if(showData === 3 && v.balance < 0) {
                return v;
            }            
        })
        .map((v) => {
            return <MobileClient events = {this.eventEvents} key={v.code} client={v}/>
        })
        };
        let sortMemoizeed=memoize(sort);        
        
        let client = this.state.editClients;

        let editClient = (client) => {
            if (client === 1) {
                let num = this.state.editNumber;
                
                let arr = this.state.dataClients.filter((v) => {
                    if (v.code ===  num) {
                        return v;
                    }});
                
                return client = arr[0];
            
            } else if (client === 2) {
                
                return client = {
                    "code": Math.min(...this.state.freeCode),
                    "name": "",
                    "surname": "",
                    "patronymic": "",
                    "balance": 0
                };
            }
        };

        let editClientMemoizeed = memoize(editClient);
                
        return (
            <div className='MobileCompany'>
                    {/* <div>
                        <button  onClick={this.setVelcom}>Velcom</button>
                        <button  onClick={this.setMtc}>MTC</button>
                        <br/>
                        Компания:
                        {this.state.status === 1 && 'Velcom'}
                        {this.state.status === 2 && 'MTC'}
                        </div>                    
                        <hr/> */}
                        <div>
                            <input defaultChecked={this.state.inputBox} type="checkbox" onChange={this.checkBox}></input>
                            <input defaultChecked={this.state.inputBox} type="checkbox" onChange={this.checkBox}></input>
                            <input defaultChecked={this.state.inputBox} type="checkbox" onChange={this.checkBox}></input>
                        </div>
                    <div>
                        <button value='all' onClick={this.showAll}>Все</button>
                        <button value='active' onClick={this.showActive}>Активные</button>
                        <button value='block' onClick={this.showBlocked}>Заблокированные</button>
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
                                {sortMemoizeed(clients)}                                
                            </tbody>
                        </table>
                    </div>
                    <div>
                      {this.state.editClients ? <MobileCard events = {this.eventEvents} key = {this.state.editNumber} client={editClientMemoizeed(client)}/> : <button value='add' onClick={this.addClient}>Добавить клиента</button>}
                    </div>
            </div>
        )
    }
    
}