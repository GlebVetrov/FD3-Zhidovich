import React from 'react';

export default class Test extends React.Component {
        render () {
            console.log(JSON.parse(this.props.companyData.result))
            return <div>Hello</div>
        }
}