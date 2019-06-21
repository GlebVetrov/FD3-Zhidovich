import React from 'react';
import { Button, Form, FormControl} from 'react-bootstrap';
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
        this.inputRef.current.value = '';
        this.props.dispatch( bookSearch(str) );
    }

    render() {        
        return (
            <Form inline> 
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={this.inputRef}/>
                    <Button variant="outline-primary" onClick={this.search}>Search</Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(SearchPanel);