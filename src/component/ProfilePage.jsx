import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ProfilePage.css';

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const email = localStorage.getItem('userEmail');
                
                if (!email) {
                    console.error('Email not found in localStorage');
                    return;
                }

                const response = await axios.get(`http://localhost:8080/api/users/profile/${email}`);
                console.log('User Profile Response:', response.data);
                setUserInfo(response.data);
                setIsAdmin(response.data.role === 'ADMIN'); // Assuming your backend sends a role field
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div className="profile-container">
            <h2>{isAdmin ? 'Admin Profile' : 'User Profile'}</h2>
            <div className="user-info">
                <p><strong>Name:</strong> {userInfo.name || "Loading..."}</p>
                <p><strong>Email:</strong> {userInfo.email || "Loading..."}</p>
            </div>
        </div>
    );
};

export default ProfilePage;
