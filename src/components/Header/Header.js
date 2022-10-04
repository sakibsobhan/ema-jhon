import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <div className="main">
                    <a href="www.google.com"><img src={logo} alt="" /></a>
                    <div className="nav-item">
                        <ul>
                            <li><a href="www.google.com">Order</a></li>
                            <li><a href="www.google.com">Order Review</a></li>
                            <li><a href="www.google.com">Manage Inventory</a></li>
                            <li><a href="www.google.com">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;