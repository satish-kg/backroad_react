import React from "react"
import {navbarLinks} from '../data';
import {navbarIcons} from '../data';

const navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                    <img src='./images/logo.svg' className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                    </div>
                    {/* <!-- left this comment on purpose --> */}
                    <ul className="nav-links" id="nav-links">
                        {navbarLinks.map((linkItem)=>{
                            const {id, title, link} = linkItem;
                            return(
                                <div key={id}>
                                    <li>
                                        <a href={link} className="nav-link">{title}</a>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>

                    <ul className="nav-icons">
                        {navbarIcons.map((iconItem)=>{
                            const {id, icon, target, link} = iconItem;
                            return(
                                <div key={id}>
                                    <li>
                                        <a href={link} target={target} className="nav-icon">
                                        <i className={icon}></i>
                                        </a>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default navbar;