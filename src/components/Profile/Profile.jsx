import profileImg from '../../assets/profile.png';
import "./Profile.css";

const Profile = ({user, hr}) => {
    const owner = hr.filter((hr) => hr.user.username === user.username);
    
    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            
            <div className="profile-section">
                {owner.length > 0 ? (
                    <>
                        <img 
                            src={profileImg} 
                            alt="Profile" 
                            className="profile-image"
                        />
                        
                        <ul className="profile-info">
                            <li>
                                <span>Username:</span>
                                <span>{owner[0].user.username}</span>
                            </li>
                            <li>
                                <span>Email:</span>
                                <span>{owner[0].user.email}</span>
                            </li>
                            <li>
                                <span>Department:</span>
                                <span>{owner[0].department}</span>
                            </li>
                            <li>
                                <span>Position:</span>
                                <span>{owner[0].name}</span>
                            </li>
                        </ul>
                        
                        <button className="edit-profile-button">
                            Edit Profile
                        </button>
                    </>
                ) : (
                    <p className="not-exists">User profile not found</p>
                )}
            </div>
        </div>
    );
}

export default Profile;