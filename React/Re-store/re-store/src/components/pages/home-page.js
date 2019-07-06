import React from 'react';
import BookList from '../book-list';
import SearchPanel from '../search-panel';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import './home-page.css';

const HomePage = (props) => {
    
    return ( 
        <div className='home-page'>
            <Navbar bg="dark" variant="dark" className="justify-content-center" style={{padding: '20px'}}>
                <SearchPanel/>
            </Navbar>

            <BookList pageNum = { props.match.params.clid } />

            
                <Navbar className="justify-content-center" bg="dark" as="ul">
                            <Nav.Item as="li">
                                
                                    <NavLink to="/1" className="PageLink" activeClassName="ActivePageLink">1-10</NavLink>
                                
                            </Nav.Item>
                            <Nav.Item as="li">
                                
                                    <NavLink to="/2" className="PageLink" activeClassName="ActivePageLink">10-20</NavLink>
                                
                            </Nav.Item>
                            <Nav.Item as="li">
                                
                                    <NavLink to="/3" className="PageLink" activeClassName="ActivePageLink">20-30</NavLink>
                                
                            </Nav.Item>
                            <Nav.Item as="li">
                                
                                    <NavLink to="/4" className="PageLink" activeClassName="ActivePageLink">30-40</NavLink>
                                
                            </Nav.Item>
                            <Nav.Item as="li">
                                
                                    <NavLink to="/5" className="PageLink" activeClassName="ActivePageLink">40-50</NavLink>
                                
                            </Nav.Item>                        
                            <Nav.Item as="li">
                                
                                    <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">All</NavLink>
                                
                            </Nav.Item>
                </Navbar>
            
            
        </div>       
        
    )
};

export default HomePage;