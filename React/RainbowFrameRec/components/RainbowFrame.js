"use strict"
import React,{Fragment, Component} from 'react';

export default class Rainbow extends Component {
    render () {    
    let colors = this.props.colors.slice();
    if (colors.length !== 0) {
        return <div style={{border:`5px solid ${colors[0]}`, padding: `10px`}} >
            <Rainbow colors = {this.props.colors.slice(1)}>{this.props.children}</Rainbow>
        </div>
        
    } else {
        return this.props.children;
    }
    }    
}