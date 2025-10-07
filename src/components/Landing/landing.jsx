import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
    return (
        
        <div className="landing-container">
            <div className="hero-section">
                <div className="hero-content">
                    <div className="badge">✨ Trusted by 10,000+ companies</div>
                    <h1>Transform Your <span className="gradient-text">Workplace</span></h1>
                    <p>Modern HR management that empowers your team and simplifies your workflow. Everything you need in one intelligent platform.</p>
                    <div className="cta-buttons">
                        <Link to="/sign-up" className="btn btn-primary">Get Started Free</Link>
                    </div>
                    <div className="trust-indicators">
                        <div className="indicator">
                            <span className="number">99.9%</span>
                            <span className="label">Uptime</span>
                        </div>
                        <div className="indicator">
                            <span className="number">4.9/5</span>
                            <span className="label">Rating</span>
                        </div>
                        <div className="indicator">
                            <span className="number">24/7</span>
                            <span className="label">Support</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="dashboard-mockup">
                        <div className="mockup-header">
                            <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="mockup-content">
                            <div className="stat-card">
                                <div className="stat-icon">👥</div>
                                <div className="stat-info">
                                    <span className="stat-value">2,847</span>
                                    <span className="stat-label">Employees</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon">📊</div>
                                <div className="stat-info">
                                    <span className="stat-value">94%</span>
                                    <span className="stat-label">Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features-section">
                <div className="section-header">
                    <span className="section-badge">Features</span>
                    <h2>Everything You Need to Succeed</h2>
                    <p>Powerful tools designed for modern HR teams</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">👥</div>
                        <h3>Employee Management</h3>
                        <p>Centralize all employee data with intuitive profiles, documents, and org charts.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🖐️</div>
                        <h3>Smart Leave Tracking</h3>
                        <p>Automated leave requests, approvals, and balance tracking with calendar integration.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📈</div>
                        <h3>Performance Analytics</h3>
                        <p>Data-driven insights with goals, reviews, and 360-degree feedback systems.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💰</div>
                        <h3>Payroll Integration</h3>
                        <p>Seamless sync with payroll providers for accurate and timely compensation.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔔</div>
                        <h3>Smart Notifications</h3>
                        <p>Stay updated with real-time alerts for approvals, deadlines, and milestones.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Enterprise Security</h3>
                        <p>Bank-level encryption with SOC 2 compliance and role-based access control.</p>
                    </div>
                </div>
            </div>

            <div className="testimonial-section">
                <div className="section-header">
                    <span className="section-badge">Testimonials</span>
                    <h2>Loved by HR Teams Worldwide</h2>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p>"Game-changer for our HR operations. Cut our admin time by 60% in the first month."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">SJ</div>
                            <div>
                                <h4>Sarah Johnson</h4>
                                <p>HR Director, TechCorp</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p>"The best HR platform we've used. Intuitive design and powerful features."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">MC</div>
                            <div>
                                <h4>Michael Chen</h4>
                                <p>VP People, StartupX</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p>"Exceptional support team and constant improvements. Worth every penny."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">EP</div>
                            <div>
                                <h4>Emily Parker</h4>
                                <p>CHRO, GlobalCo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                                    <rect width="32" height="32" rx="8" fill="url(#footerGradient)"/>
                                    <path d="M10 12H22M10 16H22M10 20H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                    <defs>
                                        <linearGradient id="footerGradient" x1="0" y1="0" x2="32" y2="32">
                                            <stop offset="0%" stopColor="#667eea"/>
                                            <stop offset="100%" stopColor="#764ba2"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h3>HR Manager</h3>
                            <p>Modern HR management that empowers your team.</p>
                        </div>

                        <div className="footer-links">
                            <div className="footer-column">
                                <h4>Product</h4>
                                <ul>
                                    <li><Link to="/employees">Employees</Link></li>
                                    <li><Link to="/sign-up">Get Started</Link></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#careers">Careers</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4>Connect</h4>
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/mohammed-ali0/" target='_blank'>LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2025 HR Manager. All rights reserved.</p>
                        <div className="footer-social">
                            <a href="https://x.com/home" target='_blank' aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/mohammed-ali0/" target='_blank' aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                                    <circle cx="4" cy="4" r="2"/>
                                </svg>
                            </a>
                            <a href="https://github.com/MohdGA" target='_blank' aria-label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;