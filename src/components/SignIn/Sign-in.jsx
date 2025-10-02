import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

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
            <h1>Sign In</h1>

            <form className="signin-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>
                
                {error && <p className="error-message">{error}</p>}
                
                <div className="button-group">
                    <button type="submit">Sign In</button>
                    <button 
                        type="button"
                        className="cancel-button"
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;