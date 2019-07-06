import React from 'react';
import ShoppingCartTable from '../shopping-cart-table';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CardPage = () => {
    return <React.Fragment>
            <ShoppingCartTable/>
            <NavLink to='/'>
                <Button variant="dark">Back</Button>
            </NavLink>
        </React.Fragment>
    
};

export default CardPage;