import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <span className="logo-text">HR</span>
                    <span className="logo-accent">Manager</span>
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    
                    {user ? (
                        <>
                            <li className="nav-item">
                                <Link to="/employees" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                    Employees
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/employees/new" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                    Add Employee
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="sign-out-btn" onClick={handleSignOut}>
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