import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bookSearch } from '../../actions'

import './search-panel.css'

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);    
        this.inputRef = React.createRef();
      }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    search = () => { 
        let str = this.inputRef.current.value;       
        console.log(str);
        this.inputRef.current.value = '';
        this.props.dispatch( bookSearch(str) );
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <Button variant="dark" onClick={this.search}>Search</Button>
                <hr></hr>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(SearchPanel);