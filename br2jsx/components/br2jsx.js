import React from 'react';

export default (props) => {
    let br = /<br\s*?\/?>/i;
    let text = [];
    let prop = props.text.split(br);
    prop.forEach((e,i) => {
        if (i){
            text.push(<br key={i}/>);
        }
        text.push(e);        
    });
    
    return <div className = 'br2jsx'>{text}</div>
}