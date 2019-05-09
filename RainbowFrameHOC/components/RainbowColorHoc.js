import React,{Fragment} from 'react';

export default (colors) => (Component) => (props) => { 
    let code = <Component {...props}/>;
    
    colors.forEach((v,i) => {
        code = <div key={i} style={{border: "10px solid " + v, padding: '10px'}}>{code}</div> 
    });
    
    return  <div>                
                {code}
            </div> 
                    
}