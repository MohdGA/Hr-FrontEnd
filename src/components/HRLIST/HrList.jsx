import React from 'react';
import { Link } from 'react-router-dom';
import './HrList.css';

const HrList = ({ hr, user }) => {
    return (
        <div className="employee-list-container">
            <div className="employee-list-header">
                <h1>Employee Directory</h1>
                {user && (
                    <Link to="/employees/new" className="add-employee-btn">
                        <i className="fas fa-plus"></i> Add Employee
                    </Link>
                )}
            </div>

            {hr.length === 0 ? (
                <div className="no-employees">
                    <p>No employees found. Add your first employee to get started.</p>
                    {user && (
                        <Link to="/employees/new" className="add-first-employee-btn">
                            Add Employee
                        </Link>
                    )}
                </div>
            ) : (
                <div className="employee-grid">
                    {hr.map((employee) => (
                        <Link to={`/employees/${employee.id}`} key={employee.id} className="employee-card">
                            <div className="employee-avatar">
                                <span>{employee.name.charAt(0)}</span>
                            </div>
                            <div className="employee-info">
                                <h3>{employee.name}</h3>
                                <p className="employee-department">{employee.department}</p>
                                <p className="employee-salary">${employee.salary.toLocaleString()}</p>
                            </div>
                            <div className="employee-stats">
                                <div className="stat">
                                    <span className="stat-value">{employee.leaves ? employee.leaves.length : 0}</span>
                                    <span className="stat-label">Leaves</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">{employee.performance ? employee.performance.length : 0}</span>
                                    <span className="stat-label">Reviews</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HrList;