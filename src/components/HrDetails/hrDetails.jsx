import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as hrService from '../../../services/hrService';
import * as leaveService from '../../../services/leaveService';
import * as performanceService from '../../../services/performanceService';
import './hrDetails.css';

const HrDetails = ({ user, handleDeleteHr }) => {
    const { employeeId } = useParams();
    const [hr, setHr] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            const employeeData = await hrService.show(employeeId);
            setHr(employeeData);
        };

        fetchEmployee();
    }, [employeeId]);

    const handleDeleteLeave = async (leaveId) => {
        await leaveService.deleteLeave(leaveId);
        setHr({
            ...hr,
            leaves: hr.leaves.filter((leave) => leave.id !== leaveId),
        });
    };

    const handleDeletePerformance = async (performanceId) => {
        await performanceService.deletedPerformance(performanceId);
        setHr({
            ...hr,
            performance: hr.performance.filter((perf) => perf.id !== performanceId),
        });
    };

    const isOwner = hr?.user?.username === user?.username;

    if (!hr) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading employee data...</p>
            </div>
        );
    }

    return (
        <div className="employee-details-container">
            <div className="employee-header">
                <div className="employee-header-content">
                    <div className="employee-avatar">
                        <span>{hr.name.charAt(0)}</span>
                    </div>
                    <div className="employee-header-info">
                        <h1>{hr.name}</h1>
                        <p className="employee-department">{hr.department}</p>
                    </div>
                </div>
                {isOwner && (
                    <div className="employee-actions">
                        <Link to={`/employees/${employeeId}/edit`} className="edit-btn">
                            <i className="fas fa-edit"></i> Edit
                        </Link>
                        <button className="delete-btn" onClick={() => handleDeleteHr(hr.id)}>
                            <i className="fas fa-trash"></i> Delete
                        </button>
                    </div>
                )}
            </div>

            <div className="employee-tabs">
                <button
                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Overview
                </button>
                <button
                    className={`tab-btn ${activeTab === 'leaves' ? 'active' : ''}`}
                    onClick={() => setActiveTab('leaves')}
                >
                    Leaves
                </button>
                <button
                    className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
                    onClick={() => setActiveTab('performance')}
                >
                    Performance
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'overview' && (
                    <div className="overview-tab">
                        <div className="info-card">
                            <h3>Employee Information</h3>
                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-label">Name</span>
                                    <span className="info-value">{hr.name}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Department</span>
                                    <span className="info-value">{hr.department}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Salary</span>
                                    <span className="info-value">${hr.salary.toLocaleString()}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Added By</span>
                                    <span className="info-value">{hr.user?.username || 'Unknown'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="stats-cards">
                            <div className="stat-card">
                                <div className="stat-icon leaves-icon">
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <div className="stat-info">
                                    <span className="stat-value">{hr.leaves.length}</span>
                                    <span className="stat-label">Leave Requests</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon performance-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <div className="stat-info">
                                    <span className="stat-value">{hr.performance.length}</span>
                                    <span className="stat-label">Performance Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'leaves' && (
                    <div className="leaves-tab">
                        <div className="tab-header">
                            <h3>Leave Requests</h3>
                            {isOwner && (
                                <Link to={`/employees/${employeeId}/newLeave`} className="add-btn">
                                    <i className="fas fa-plus"></i> Add Leave
                                </Link>
                            )}
                        </div>

                        {hr.leaves.length === 0 ? (
                            <div className="no-data">
                                <p>No leave requests found.</p>
                                {isOwner && (
                                    <Link to={`/employees/${employeeId}/newLeave`} className="add-first-btn">
                                        Add First Leave Request
                                    </Link>
                                )}
                            </div>
                        ) : (
                            <div className="leaves-list">
                                {hr.leaves.map((leave) => (
                                    <div key={leave.id} className="leave-card">
                                        <div className="leave-header">
                                            <span className={`leave-status ${leave.status.toLowerCase()}`}>
                                                {leave.status}
                                            </span>
                                            <span className="leave-type">{leave.type}</span>
                                        </div>
                                        <div className="leave-dates">
                                            <div className="date-item">
                                                <span className="date-label">Start Date</span>
                                                <span className="date-value">{new Date(leave.start_date).toLocaleDateString()}</span>
                                            </div>
                                            <div className="date-item">
                                                <span className="date-label">End Date</span>
                                                <span className="date-value">{new Date(leave.end_date).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                        {isOwner && (
                                            <button
                                                className="delete-leave-btn"
                                                onClick={() => handleDeleteLeave(leave.id)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'performance' && (
                    <div className="performance-tab">
                        <div className="tab-header">
                            <h3>Performance Reviews</h3>
                            {isOwner && (
                                <Link to={`/employees/${employeeId}/newPerformance`} className="add-btn">
                                    <i className="fas fa-plus"></i> Add Review
                                </Link>
                            )}
                        </div>

                        {hr.performance.length === 0 ? (
                            <div className="no-data">
                                <p>No performance reviews found.</p>
                                {isOwner && (
                                    <Link to={`/employees/${employeeId}/newPerformance`} className="add-first-btn">
                                        Add First Performance Review
                                    </Link>
                                )}
                            </div>
                        ) : (
                            <div className="performance-list">
                                {hr.performance.map((performance) => (
                                    <div key={performance.id} className="performance-card">
                                        <div className="performance-header">
                                            <div className="rating">
                                                <span className="rating-value">{performance.rating}</span>
                                                <span className="rating-max">/5</span>
                                            </div>
                                            <span className="review-date">
                                                {new Date(performance.review_date).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="performance-comments">{performance.comments}</p>
                                        {isOwner && (
                                            <button
                                                className="delete-performance-btn"
                                                onClick={() => handleDeletePerformance(performance.id)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HrDetails;