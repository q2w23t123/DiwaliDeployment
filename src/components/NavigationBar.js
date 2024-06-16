import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import scrollIntoView from 'scroll-into-view';
import "./NavigationBar.css";

const NavigationBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleDropdownToggle = (dropdown) => {
        setDropdownOpen((prevState) => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    const handleLinkClick = (event, path, sectionId) => {
        event.preventDefault();
        navigate(path);

        // Delay the scroll to allow the navigation to complete
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                scrollIntoView(section, {
                    time: 500,
                });
            }
        }, 100);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Close dropdown when navigating to a different page
        setDropdownOpen({});
    }, [location.pathname]);

    let navbarClass = `navbar ${isHomePage ? (scrolled ? 'navbar-scrolled-homepage' : 'navbar-home') : 'navbar-scrolled'}`;

    return (
        <nav className={navbarClass}>
            <a href="/" className="logo">
                <img src="/MD-Logo-Transparent-300x171.webp" alt="Logo" id="logo-img" />
            </a>
            <button className="menu-toggle" onClick={handleMenuToggle}>
                &#9776;
            </button>
            <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Home</NavLink></li>
                <li className="dropdown">
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        About Us
                    </NavLink>
                    <button
                        className="dropdown-toggle"
                        onClick={() => handleDropdownToggle('about-us')}
                        style={{ color: isHomePage ? 'white' : 'black' }}
                    >
                        {dropdownOpen['about-us'] ? '-' : '+'}
                    </button>
                    <ul className={`dropdown-menu ${dropdownOpen['about-us'] ? 'show' : ''} ${isHomePage ? 'homepage-dropdown' : ''}`}>
                        <li><a href="/about-us#history-of-diwali" onClick={(event) => handleLinkClick(event, '/about-us', 'history-of-diwali')} style={{ color: isHomePage ? 'white' : 'black' }}>History of Diwali</a></li>
                        <li><a href="/about-us#sarascare" onClick={(event) => handleLinkClick(event, '/about-us', 'sarascare')} style={{ color: isHomePage ? 'white' : 'black' }}>SarasCare</a></li>
                        <li><a href="/about-us#our-team" onClick={(event) => handleLinkClick(event, '/our-team')} style={{ color: isHomePage ? 'white' : 'black' }}>Our Team</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <NavLink
                        to="/event-details"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Event Details
                    </NavLink>
                    <button
                        className="dropdown-toggle"
                        onClick={() => handleDropdownToggle('event-details')}
                        style={{ color: isHomePage ? 'white' : 'black' }}
                    >
                        {dropdownOpen['event-details'] ? '-' : '+'}
                    </button>
                    <ul className={`dropdown-menu ${dropdownOpen['event-details'] ? 'show' : ''} ${isHomePage ? 'homepage-dropdown' : ''}`}>
                        <li><NavLink to="/event-details" className={({ isActive }) => isActive ? 'active' : ''} end style={{ color: isHomePage ? 'white' : 'black' }}>Event Details</NavLink></li>
                        <li><NavLink to="/key-features" className={({ isActive }) => isActive ? 'active' : ''} end style={{ color: isHomePage ? 'white' : 'black' }}>Key Features</NavLink></li>
                        <li><NavLink to="/faqs" className={({ isActive }) => isActive ? 'active' : ''} end style={{ color: isHomePage ? 'white' : 'black' }}>FAQ</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/participation" className={({ isActive }) => isActive ? 'active' : ''} end>Participation</NavLink></li>
                <li className="dropdown">
                    <NavLink
                        to="/sponsors-partners/2024"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Sponsors & Partners
                    </NavLink>
                    <button
                        className="dropdown-toggle"
                        onClick={() => handleDropdownToggle('sponsors-partners')}
                        style={{ color: isHomePage ? 'white' : 'black' }}
                    >
                        {dropdownOpen['sponsors-partners'] ? '-' : '+'}
                    </button>
                    <ul className={`dropdown-menu ${dropdownOpen['sponsors-partners'] ? 'show' : ''} ${isHomePage ? 'homepage-dropdown' : ''}`}>
                        <li><NavLink to="/sponsors-partners/2024" className={({ isActive }) => isActive ? 'active' : ''} end style={{ color: isHomePage ? 'white' : 'black' }}>2024</NavLink></li>
                        <li><NavLink to="/sponsors-partners/2023" className={({ isActive }) => isActive ? 'active' : ''} end style={{ color: isHomePage ? 'white' : 'black' }}>2023</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/business-lounge" className={({ isActive }) => isActive ? 'active' : ''} end>Business Lounge</NavLink></li>
                <li className="dropdown">
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Gallery
                    </NavLink>
                    <button
                        className="dropdown-toggle"
                        onClick={() => handleDropdownToggle('gallery')}
                        style={{ color: isHomePage ? 'white' : 'black' }}
                    >
                        {dropdownOpen['gallery'] ? '-' : '+'}
                    </button>
                    <ul className={`dropdown-menu ${dropdownOpen['gallery'] ? 'show' : ''} ${isHomePage ? 'homepage-dropdown' : ''}`}>
                        <li><NavLink to="/gallery/2024" className={({ isActive }) => isActive ? 'active' : ''} end style={{ color: isHomePage ? 'white' : 'black' }}>2024</NavLink></li>
                        <li><NavLink to="/gallery/2023" className={({ isActive }) => isActive ? 'active' : ''} end style={{ color: isHomePage ? 'white' : 'black' }}>2023</NavLink></li>
                        <li><NavLink to="/gallery/2022" className={({ isActive }) => isActive ? 'active' : ''} end style={{ color: isHomePage ? 'white' : 'black' }}>2022</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} end>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;









