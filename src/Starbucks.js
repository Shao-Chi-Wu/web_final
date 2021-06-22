import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
//import Navbar from './Navbar'

var sectionStyle = {
    height : '100vh',
    backgroundSize: 'cover',
    backgroundImage: 'url(https://i.imgur.com/Q8vYDBQ.jpg)',
    opacity:'0.75',
};

function Starbucks() {
    return (
        <div style={sectionStyle}>
            <nav className="nav">
                <h2>Starbucks</h2>
                <ul className="link">
                    <Link className="navlink navlink-left" >
                        <li display="inline-block">Menu
                            <ul className="list">
                                <li>Drinks</li>
                                <li>Foods</li>
                            </ul>
                        </li>
                    </Link>
                    <Link className="navlink navlink-left" >
                        <li>About</li>
                    </Link>
                    <Link className="navlink navlink-left" >
                        <li>Location</li>
                    </Link>
                    <Link className="navlink navlink-left" to ="/">
                        <li>Back</li>
                    </Link>
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
        
    );
}

export default Starbucks;