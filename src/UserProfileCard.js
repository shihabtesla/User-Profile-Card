import React from 'react';
import './UserProfileCard.css';

function UserProfileCard(props) {
  return (
    <div className="profile-card">
      <img src={props.avatar} alt="User Avatar" className="avatar" />
      <div className="user-details">
        <h2>{props.name}</h2>
        <p>{props.biography}</p>
      </div>
    </div>
  );
}

export default UserProfileCard;
