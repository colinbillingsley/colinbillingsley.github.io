import { useState } from "react";

const Nav = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [navColor, setNavColor] = useState(false);

    const menuClick = () => {
        setMenuActive(!menuActive);
    };

    const changeColor = () => {
        if (window.scrollY >= 50) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    };

    window.addEventListener('scroll', changeColor);

    return (
        <header className="header-container">
            <nav className={`nav-container ${navColor ? 'nav-dark-bg' : ''}`}>
                <a className="name-link" href="#">&lt;Colin Billingsley /&gt;</a>
                <ul className="nav-links-container">
                    <li className="nav-link-item">
                        <a href="#about" className="nav-link">About Me</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="#education" className="nav-link">Education</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="#skills" className="nav-link">Skills</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="#projects" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="#contact" className="nav-link">Contact Me</a>
                    </li>
                </ul>
                
                <div className="sidebar-container">
                    <div className={`menu-container ${menuActive ? 'active' : ''}`} onClick={menuClick}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <ul className={`sidebar ${menuActive ? 'open' : 'closed'}`}>
                        <li className="sidebar-item">
                            <a href="#about" className="sidebar-link">About Me</a>
                        </li>
                        <li className="sidebar-item">
                            <a href="#education" className="sidebar-link">Education</a>
                        </li>
                        <li className="sidebar-item">
                            <a href="#skills" className="sidebar-link">Skills</a>
                        </li>
                        <li className="sidebar-item">
                            <a href="#projects" className="sidebar-link">Projects</a>
                        </li>
                        <li className="sidebar-item">
                            <a href="#contact" className="sidebar-link">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav
