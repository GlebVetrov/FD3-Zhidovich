import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MobileSort  extends Component {
    static PropTypes = {

    }

    state = {

    }

    render() {
        return <div className='MobileSort'>
            <button>Все</button>
            <button>Активные</button>
            <button>Заблокированные</button>
            <hr/>
        </div>
    }
}

export default MobileSort;