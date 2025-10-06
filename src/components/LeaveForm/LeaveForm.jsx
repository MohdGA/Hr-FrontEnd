import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './LeaveForm.css';

const LeaveForm = (props) => {
    const {employeeId} = useParams();
    const [formData, setFormData] = useState({
        type: '',
        start_date: '',
        end_date: '',
        status: 'Pending',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await props.handleAddLeave(formData, employeeId);
        navigate(`/employees/${employeeId}`);
    };

    return (
        <div className="leave-form-container">
            <h2>Leave Request Form</h2>

            <form className="leave-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="type">Leave Type:</label>
                    <input 
                        type="text"
                        id="type"
                        name="type"
                        placeholder="Vacation, Sick, Personal, etc."
                        value={formData.type}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input 
                        type="date"
                        id="startDate"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="endDate">End Date:</label>
                    <input 
                        type="date"
                        id="endDate"
                        name="end_date"
                        value={formData.end_date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <select 
                        id="status"
                        name="status" 
                        value={formData.status} 
                        onChange={handleChange}
                        className={`status-${formData.status.toLowerCase()}`}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>

                <button type="submit">Submit Request</button>
            </form>
        </div>
    )
}

export default LeaveForm;