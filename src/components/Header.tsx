import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


import { NavContext } from '../App';

import "../theming/Header.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
    const active = useContext(NavContext)[1];

    const isActive = (page: string) => {
        return(page===active)
    }

    return(
        <div className="header">
            <p className="title">Custom React Webapp</p>
            <div className="end_slot">
            <Link to="/">
                <div className={isActive("/")?"nav_tab active":"nav_tab"}>
                    <p>Home</p>
                </div>
            </Link>
            <Link to="about">
                <div className={isActive("about")?"nav_tab active":"nav_tab"}>
                    <p>About</p>
                </div>
            </Link>
            </div>
        </div>
    );
}

export default Header;