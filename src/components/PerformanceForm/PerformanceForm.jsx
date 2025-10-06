import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './PerformanceForm.css';

const PerformanceForm = (props) => {
    const {employeeId} = useParams();
    const [formData, setFormData] = useState({
        review_date: "",
        rating: 0,
        comments: ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await props.handleAddPerformance(formData, employeeId);
        navigate(`/employees/${employeeId}`);
    }

    return (
        <div className="performance-form-container">
            <h1>Performance Review</h1>

            <form className="performance-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="review">Review Date:</label>
                    <input 
                        type="date"
                        id="review"
                        name="review_date"
                        value={formData.review_date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="rating">Rating (0-5):</label>
                    <div className="rating-container">
                        <input 
                            type="number"
                            id="rating"
                            name="rating"
                            min="0"
                            max="5"
                            value={formData.rating}
                            onChange={handleChange}
                            required
                        />
                        <div className="rating-stars">
                            {[...Array(parseInt(formData.rating) || 0)].map((_, i) => (
                                <span key={i} className="star">★</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="comments">Comments:</label>
                    <textarea 
                        id="comments"
                        name="comments"
                        className="comments-area"
                        value={formData.comments}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default PerformanceForm;