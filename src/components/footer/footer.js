/*
*
* footer.js
* @author - Mazeen
* @date - 14 October, 2022
**/
import React from "react";
import './style.css';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="row">
                <div class="cell-1">
                    <ul class="sub-footer-list">
                        <li>WHATSAPP</li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Download</a></li>
                        <li><a href="#">WhatsApp Web</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
                <div class="cell-1">
                    <ul class="sub-footer-list">
                        <li>WHATSAPP</li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Brand Center</a></li>
                        <li><a href="#">Get in touch</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">WhatsApp Stories</a></li>
                    </ul>
                </div>
                <div class="cell-1">
                    <ul class="sub-footer-list">
                        <li>DOWNLOAD</li>
                        <li><a href="#">Mac/PC</a></li>
                        <li><a href="#">Android</a></li>
                        <li><a href="#">iPhone</a></li>
                    </ul>
                </div>
                <div class="cell-1">
                    <ul class="sub-footer-list">
                        <li>HELP</li>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Coronavirus</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;