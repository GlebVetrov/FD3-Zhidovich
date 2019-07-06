"use strict"
import React,{Fragment} from 'react';

export default (props) => {
    let code = props.children;
    props.colors.forEach((e, i) => {
        code = <div key={i} style={{border: '10px solid ' + e, padding: '10px'}}>{code}</div>
    }); 
    
    return <Fragment>{code}</Fragment>
}