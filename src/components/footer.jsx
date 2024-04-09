import React, { Component } from 'react';
import { footerLinks, footerIcons } from '../data';

const footer = () => {
    return (
        <>
            <footer className="section footer">
                <ul className="footer-links">
                    {footerLinks.map((linkItem)=>{
                        const {id, title, link} = linkItem;
                        return(
                            <div key={id}>
                                <li>
                                    <a href={link} className="footer-link">{title}</a>
                                </li>
                            </div>
                        )
                    })}
                </ul>
                <ul className="footer-icons">
                    {footerIcons.map((iconItem)=>{
                        const {id, icon, target, link} = iconItem;
                        return(
                            <div key={id}>
                                <li>
                                    <a href={link} target={target} className="footer-icon"><i className={icon}></i></a>
                                </li>
                            </div>
                        )
                    })}
                </ul>
                <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
                </p>
            </footer>
        </>
    )
}

export default footer;
