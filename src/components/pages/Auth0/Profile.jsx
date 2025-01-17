import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
    return <div>Loading ...</div>;
    }
        // In this return the user information is dispalyed on the screen with a picture if available
    return (
    isAuthenticated && (
        <div className="profile-card">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </div>
    )
    );
};

export default Profile;