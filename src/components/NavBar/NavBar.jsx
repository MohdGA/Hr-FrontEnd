import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';
const Navbar = ({ user, handleSignOut }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="url(#gradient)"/>
                            <path d="M10 12H22M10 16H22M10 20H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                                    <stop offset="0%" stopColor="#667eea"/>
                                    <stop offset="100%" stopColor="#764ba2"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="logo-text-container">
                        <span className="logo-text">HR</span>
                        <span className="logo-accent">Manager</span>
                    </div>
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M3 7L10 2L17 7V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Home
                        </Link>
                    </li>
                    
                    {user ? (
                        <>
                            <li className="nav-item">
                                <Link to="/employees" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M14 17V15C14 13.9391 13.5786 12.9217 12.8284 12.1716C12.0783 11.4214 11.0609 11 10 11H4C2.93913 11 1.92172 11.4214 1.17157 12.1716C0.421427 12.9217 0 13.9391 0 15V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="7" cy="4" r="4" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M20 17V15C19.9993 14.1137 19.7044 13.2528 19.1614 12.5523C18.6184 11.8519 17.8581 11.3516 17 11.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14 1.13C14.8604 1.35031 15.623 1.85071 16.1676 2.55232C16.7122 3.25392 17.0078 4.11683 17.0078 5.005C17.0078 5.89317 16.7122 6.75608 16.1676 7.45768C15.623 8.15929 14.8604 8.65969 14 8.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Employees
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/employees/new" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M10 6V14M6 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    Add Employee
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M3 18C3 15.2386 5.68629 13 9 13H11C14.3137 13 17 15.2386 17 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="sign-out-btn" onClick={handleSignOut}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M13 13L18 10L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M18 10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Sign Out
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link to="/sign-in" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                    Sign In
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sign-up" className="nav-link sign-up-link" onClick={() => setIsMenuOpen(false)}>
                                    Sign Up
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;