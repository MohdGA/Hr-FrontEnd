import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Sign-in.css';

const SignIn = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    
    const [error, setError] = useState("");

    useEffect(() => {
        if(props.user) {
            navigate('/');
        }
    }, [props.user, navigate]);

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            props.handleSignIn(formData);
            navigate('/');
        } catch (error) {
            setError("Sign in failed. Please check your credentials.");
            console.log(error);
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-form-wrapper">
                <div className="signin-header">
                    <div className="signin-logo">
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
                        <span className="signin-logo-text">HR Manager</span>
                    </div>
                    <h1>Welcome Back</h1>
                    <p>Sign in to your account to continue</p>
                </div>

                <form className="signin-form" onSubmit={handleSubmit}>
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
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
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
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
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
                        <button type="submit">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M13 13L18 10L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M18 10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            Sign In
                        </button>
                        <button 
                            type="button"
                            className="cancel-button"
                            onClick={() => navigate('/')}
                        >
                            Cancel
                        </button>
                    </div>
                </form>

                <div className="signin-footer">
                    <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;