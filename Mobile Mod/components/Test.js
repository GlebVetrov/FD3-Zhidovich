import React from 'react';

export default class Test extends React.Component {
        render () {
            console.log(JSON.parse(this.props.companyData.result))
            return <div>Hello</div>
        }
}
// ну например так:

// в родительском компоненте:

// componentDidMount() {
//   this.clientEvents=new EventEmitter();
//   this.clientEvents.addListener('EDeleteClient',this.deleteClient)
// }

// deleteClient = clientId => {
//   ...
// }

// render() {
//   ...
//   <Client events={this.clientEvents}>
//   ...
// }

// в Client:

// render() {
//   ...
//   <input type="button" onClick={ ()=>this.props.events.emit('EDeleteClient',this.props.clientId) }>
//   ...
// }