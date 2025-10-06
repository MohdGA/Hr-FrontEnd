import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './HrForm.css';

const HrForm = ({ handleAddEmployee, handleUpdateHr }) => {
    const navigate = useNavigate();
    const { employeeId } = useParams();
    const isEditing = Boolean(employeeId);

    const [formData, setFormData] = useState({
        name: '',
        department: '',
        salary: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const validate = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.department) {
            newErrors.department = 'Department is required';
        }
        
        if (!formData.salary || formData.salary <= 0) {
            newErrors.salary = 'Valid salary is required';
        }
        
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        try {
            if (isEditing) {
                await handleUpdateHr(employeeId, formData);
            } else {
                await handleAddEmployee(formData);
            }
            navigate('/employees');
        } catch (error) {
            console.error('Error saving employee:', error);
        }
    };

    return (
        <div className="hr-form-container">
            <div className="hr-form-wrapper">
                <div className="hr-form-header">
                    <div className="header-icon">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect width="48" height="48" rx="12" fill="url(#formGradient)"/>
                            <path d="M24 16C21.2386 16 19 18.2386 19 21C19 23.7614 21.2386 26 24 26C26.7614 26 29 23.7614 29 21C29 18.2386 26.7614 16 24 16Z" stroke="white" strokeWidth="2"/>
                            <path d="M15 32C15 28.6863 17.6863 26 21 26H27C30.3137 26 33 28.6863 33 32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            <defs>
                                <linearGradient id="formGradient" x1="0" y1="0" x2="48" y2="48">
                                    <stop offset="0%" stopColor="#667eea"/>
                                    <stop offset="100%" stopColor="#764ba2"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h1>{isEditing ? 'Edit Employee' : 'Add New Employee'}</h1>
                    <p>Fill in the employee details below</p>
                </div>

                <form onSubmit={handleSubmit} className="hr-form">
                    <div className="form-grid">
                        <div className="form-field">
                            <label htmlFor="name">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M3 15C3 12.7909 5.68629 11 9 11C12.3137 11 15 12.7909 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-text">{errors.name}</span>}
                        </div>

                        <div className="form-field">
                            <label htmlFor="department">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M3 6L9 2L15 6V14C15 14.5304 14.7893 15.0391 14.4142 15.4142C14.0391 15.7893 13.5304 16 13 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6Z" stroke="currentColor" strokeWidth="1.5"/>
                                </svg>
                                Department
                            </label>
                            <select
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                className={errors.department ? 'error' : ''}
                            >
                                <option value="">Select Department</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Sales">Sales</option>
                                <option value="HR">HR</option>
                                <option value="Finance">Finance</option>
                                <option value="Operations">Operations</option>
                                <option value="Product">Product</option>
                                <option value="Design">Design</option>
                            </select>
                            {errors.department && <span className="error-text">{errors.department}</span>}
                        </div>

                       

                        <div className="form-field">
                            <label htmlFor="salary">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M9 6V9L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                                Annual Salary ($)
                            </label>
                            <input
                                type="number"
                                id="salary"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder="75000"
                                min="0"
                                step="1000"
                                className={errors.salary ? 'error' : ''}
                            />
                            {errors.salary && <span className="error-text">{errors.salary}</span>}
                        </div>

                        
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16 5L7 14L3 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {isEditing ? 'Update Employee' : 'Add Employee'}
                        </button>
                        <button 
                            type="button" 
                            className="cancel-btn" 
                            onClick={() => navigate('/employees')}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HrForm;