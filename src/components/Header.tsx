import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Controller } from '../App';

import "../theming/Header.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
    const controller = useContext(Controller);

    const isActive = (page: string) => {
        if (page==="/") {
            return(controller.activePage==="home")
        }
        return(page===controller.activePage);
    }

    return(
        <div className="header">
            <div className="header_content">
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
        </div>
    );
}

export default Header;