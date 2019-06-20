import React from 'react';
import BookList from '../book-list';
import SearchPanel from '../search-panel';
import { NavLink } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

import './home-page.css';

const HomePage = (props) => {
    
    return ( 
        <div className='home-page'>
            <ListGroup>
                        <ListGroup.Item><SearchPanel /></ListGroup.Item>
                        <ListGroup.Item><NavLink to="/1" className="PageLink" activeClassName="ActivePageLink">1-10</NavLink></ListGroup.Item>
                        <ListGroup.Item><NavLink to="/2" className="PageLink" activeClassName="ActivePageLink">10-20</NavLink></ListGroup.Item>
                        <ListGroup.Item><NavLink to="/3" className="PageLink" activeClassName="ActivePageLink">20-30</NavLink></ListGroup.Item>
                        <ListGroup.Item><NavLink to="/4" className="PageLink" activeClassName="ActivePageLink">30-40</NavLink></ListGroup.Item>
                        <ListGroup.Item><NavLink to="/5" className="PageLink" activeClassName="ActivePageLink">40-50</NavLink></ListGroup.Item>
                        <ListGroup.Item><NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">All</NavLink></ListGroup.Item>
                </ListGroup>
            <hr/>
            <BookList pageNum = { props.match.params.clid } />
        </div>       
        
    )
};

export default HomePage;