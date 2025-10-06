import { Link } from 'react-router-dom';
import './HrList.css'


const HrList = ({ hr, user }) => {

    const isOwner = hr.filter(emp => emp.user?.username === user?.username);

    console.log(isOwner)

    return (
        <div className="employee-list-container">
            <div className="employee-list-header">
                <div className="header-content">
                    <h1>Employee Directory</h1>
                    <p className="header-subtitle">{isOwner.length} team {isOwner.length === 1 ? 'member' : 'members'}</p>
                </div>
                {user && (
                    <Link to="/employees/new" className="add-employee-btn">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Add Employee
                    </Link>
                )}
            </div>

            {isOwner ? (
                <div className="employee-grid">
                    {isOwner && isOwner.length > 0 ? (
                    isOwner.map((employee) => (
                        <Link
                        to={`/employees/${employee.id}`}
                        key={employee.id}
                        className="employee-card"
                        >
                        <div className="card-header">
                            <div className="employee-avatar">
                            <span>{employee.name.charAt(0).toUpperCase()}</span>
                            </div>
                            <div className="status-badge">Active</div>
                        </div>

                        <div className="employee-info">
                            <h3>{employee.name}</h3>
                            <p className="employee-department">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                d="M2 6L8 2L14 6V13C14 13.5304 13.7893 14.0391 13.4142 14.4142C13.0391 14.7893 12.5304 15 12 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V6Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            {employee.department}
                            </p>
                            <p className="employee-salary">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle
                                cx="8"
                                cy="8"
                                r="6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                />
                                <path
                                d="M8 5V8L10 10"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                />
                            </svg>
                            ${employee.salary.toLocaleString()}/year
                            </p>
                        </div>

                        <div className="employee-stats">
                            <div className="stat">
                            <span className="stat-icon">🏖️</span>
                            <div className="stat-content">
                                <span className="stat-value">
                                {employee.leaves ? employee.leaves.length : 0}
                                </span>
                                <span className="stat-label">Leaves</span>
                            </div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat">
                            <span className="stat-icon">⭐</span>
                            <div className="stat-content">
                                <span className="stat-value">
                                {employee.performance ? employee.performance.length : 0}
                                </span>
                                <span className="stat-label">Reviews</span>
                            </div>
                            </div>
                        </div>

                        <div className="card-footer">
                            <span className="view-details">View Details</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M6 12L10 8L6 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
                        </div>
                        </Link>
                    ))
                    ) : (
                    <p>No Employees</p>
                    )}
                </div>
                ) : (
                <p>No Employees</p>
                )}

                    
            </div>
    );
};

export default HrList;