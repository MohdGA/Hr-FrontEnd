import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Sign-up.css';

const SignUp = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: "",
        password: '',
        passwordConf: ''
    });
    
    const [error, setError] = useState("");

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await props.handleSignUp(formData);
            
            if(result.success) {
                navigate('/sign-in');
            } else {
                setError(result.message || "Sign up failed. Please try again.");
            }
        } catch(error) {
            setError("An unexpected error occurred. Please try again.");
            console.log(error);
        }
    };

    const isFormInvalid = () => {
        return !(formData.username && formData.email && formData.password && formData.password === formData.passwordConf);
    };

    return (
        <div className="signup-container">
            <div className="signup-form-wrapper">
                <div className="signup-header">
                    <div className="signup-logo">
                        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="url(#gradient)"/>
                            <path d="M10 12H22M10 16H22M10 20H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                                    <stop offset="0%" stopColor="#667eea"/>
                                    <stop offset="100%" stopColor="#764ba2"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="signup-logo-text">HR Manager</span>
                    </div>
                    <h1>Create Account</h1>
                    <p>Join thousands of HR professionals today</p>
                </div>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M2 14C2 11.7909 4.68629 10 8 10C11.3137 10 14 11.7909 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            Username
                        </label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Choose a username"
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <rect x="2" y="4" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M2 5L8 9L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Email
                        </label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <rect x="3" y="7" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M5 7V5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            Password
                        </label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="confirm">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M13 5L6 12L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Confirm Password
                        </label>
                        <input 
                            type="password"
                            id="confirm"
                            name="passwordConf"
                            value={formData.passwordConf}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            required 
                        />
                    </div>
                    
                    {error && (
                        <p className="error-message">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M8 4V8M8 11V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            {error}
                        </p>
                    )}
                    
                    <div className="button-group">
                        <button 
                            type="submit" 
                            disabled={isFormInvalid()}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                                <path d="M3 18C3 15.2386 5.68629 13 9 13H11C14.3137 13 17 15.2386 17 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            Create Account
                        </button>
                        <button 
                            type="button"
                            className="cancel-button" 
                            onClick={() => navigate('/')}
                        >
                            Cancel
                        </button>
                    </div>

                    <p className="terms-text">
                        By signing up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                    </p>
                </form>

                <div className="signup-footer">
                    <p>Already have an account? <Link to="/sign-in">Sign in</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;