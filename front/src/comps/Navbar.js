import React from 'react';
import { Nav, NavTitle } from '../style/global'
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    const navigate = useNavigate();
    return(<Nav>
        <NavTitle onClick={() => navigate("/")}>JM BLOG</NavTitle>
    </Nav>);
}

export default Navbar;