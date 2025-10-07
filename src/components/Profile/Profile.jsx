import profileImg from '../../assets/profile.png';
import './Profile.css';

const Profile = ({user}) => {
  
    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            
            <div className="profile-section">
                {user ? (
                    <>
                        <img 
                            src={profileImg} 
                            alt="Profile" 
                            className="profile-image"
                        />
                        
                        <ul className="profile-info">
                            <li>
                                <span>Username:</span>
                                <span>{user.username}</span>
                            </li>
                        </ul>
                        
                    </>
                ) : (
                    <p className="not-exists">User profile not found</p>
                    
                )}
            </div>
        </div>
    );
}

export default Profile;