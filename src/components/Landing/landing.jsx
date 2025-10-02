import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Streamline Your HR Operations</h1>
                    <p>A comprehensive solution for modern human resource management</p>
                    <div className="cta-buttons">
                        <Link to="/sign-in" className="btn btn-primary">Get Started</Link>
                        <Link to="/sign-up" className="btn btn-outline">Create Account</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/hero-image.png" alt="HR Management Dashboard" />
                </div>
            </div>

            <div className="features-section">
                <h2>Why Choose Our HR Management System?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3>Employee Management</h3>
                        <p>Efficiently manage employee data, onboarding, and documentation in one place.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <h3>Leave Management</h3>
                        <p>Streamline leave requests, approvals, and tracking with automated workflows.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3>Performance Tracking</h3>
                        <p>Set goals, conduct reviews, and monitor employee performance metrics.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-file-invoice"></i>
                        </div>
                        <h3>Payroll Integration</h3>
                        <p>Seamlessly connect HR data with payroll systems for accurate compensation.</p>
                    </div>
                </div>
            </div>

            <div className="testimonial-section">
                <h2>Trusted by Leading Companies</h2>
                <div className="testimonial-card">
                    <p>"This HR system has transformed how we manage our workforce. The intuitive interface and comprehensive features have saved us countless hours."</p>
                    <div className="testimonial-author">
                        <h4>Sarah Johnson</h4>
                        <p>HR Director, TechCorp Inc.</p>
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <h2>Ready to Transform Your HR Operations?</h2>
                <p>Join thousands of companies already using our platform to streamline their HR processes.</p>
                <Link to="/sign-up" className="btn btn-primary">Start Free Trial</Link>
            </div>
        </div>
    );
};

export default Landing;