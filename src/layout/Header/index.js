import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/repo" activeClassName="current">Repo</NavLink>
            <NavLink to="/repoDetails" activeClassName="current">RepoDetails</NavLink>
        </nav>
    )
};

export default Header;