import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

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
        return !(formData.username && formData.password && formData.password === formData.passwordConf);
    };

    return (
        <div className="signup-container">
            <h1>Create Account</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="confirm">Confirm Password:</label>
                    <input 
                        type="password"
                        id="confirm"
                        name="passwordConf"
                        value={formData.passwordConf}
                        onChange={handleChange}
                        required 
                    />
                </div>
                
                {error && <p className="error-message">{error}</p>}
                
                <div className="button-group">
                    <button 
                        type="submit" 
                        disabled={isFormInvalid()}
                    >
                        Sign Up
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
        </div>
    );
}

export default SignUp;