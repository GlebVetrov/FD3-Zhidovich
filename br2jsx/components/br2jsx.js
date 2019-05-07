import React from 'react';

export default (props) => {
    let br = /<br\s*?\/?>/i;
    let text = [];
    let prop = props.text.split(br);
    prop.forEach((e,i) => {
        text.push(e);
        if (i !== prop.length - 1){
        text.push(<br key={i}/>);
        }
    });
    console.log(text);
    return <div className = 'br2jsx'>{text}</div>
}