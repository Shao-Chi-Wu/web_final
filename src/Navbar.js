import React, {useState} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import Dropdown from './Dropdown'

var sectionStyle = {
    height : '100vh',
    backgroundSize: 'cover',
    backgroundImage: 'url(https://i.imgur.com/T1EdB7f.jpg)',
    opacity:'0.8',
};

function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [dropdown, setDropdown] = useState(false);
    const closeMobileMenu = () => setClick(false);
    const onMouseEnter = () => {
        if(window.innerWidth < 1080){
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if(window.innerWidth < 1080){
            setDropdown(true);
        } else{
            setDropdown(false);
        }
    };

    return (
        <div style={sectionStyle}>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    Starbucks
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="https://www.starbucks.com.tw/stores/digital.jspx" className="nav-links" onClick={closeMobileMenu}>
                            About
                        </a>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <div className="nav-links" onClick={closeMobileMenu}>
                            Menu <i className="fas fa-caret-down"/>
                        </div>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className="nav-item">
                        <a href="https://www.google.com/maps/search/%E6%98%9F%E5%B7%B4%E5%85%8B" className="nav-links nav-links-left" onClick={closeMobileMenu}>
                            Location
                        </a>
                    </li>

                </ul>
            </nav>
            <div className="word">
                <h2>今天 想來點星巴克</h2>
                <p className="content">滑順雅致 夏日氣息</p>
                <p className="content">香醇滑順 瀑布般傾注</p>
                <p className="content">盡情享受 幸福當下</p>
                <p className="content">星禮程 金星禮</p>
            </div>
        </div>
    )
}

export default Navbar;