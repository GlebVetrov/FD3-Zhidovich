import React from 'react';

import './spinner.css';

class Spinner extends React.Component {
    render() {
        return (
        <div className="lds-css ng-scope">
            <div className="lds-spin" style={{width:"100%", height:"100%", margin:"0 auto"}}>
                <div><div></div></div><div><div></div>
                </div><div><div></div></div><div><div>
                </div></div><div><div></div></div><div>
                <div></div></div><div><div></div></div>
            </div>
        </div>
        )
    }
}

export default Spinner;