/*
*
* header.js
* @author - Mazeen
* @date - 14 October, 2022
**/
import React from "react";
import './style.css';
import Logo from '../../img/Whatsapp.png';

const Navbar = () => {
    return (
        <navbar class="menu-bar">
            <div class="row">
                <div class="cell-200w">
                    <img src={Logo}></img>
                </div>
                <div class="cell-1">
                    <ul class="menu-list">
                        <li>WHATSAPP WEB</li>
                        <li>FEATURES</li>
                        <li>DOWNLOAD</li>
                        <li>PRIVACY</li>
                        <li>HELP CENTER</li>
                        <li>EN</li>
                    </ul>  
                </div>
            </div>
        </navbar>
    )
}
export default Navbar;