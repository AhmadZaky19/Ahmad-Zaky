import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./index.css";

function Profile() {
  const [profile, setProfile] = useState({});

  const getProfileUserAPI = async () => {
    const res = await axios.get("https://api.github.com/users/AhmadZaky19");
    setProfile(res.data);
  }

  useEffect(() => {
    getProfileUserAPI();
  }, []);

  return (
    <aside className="profile">
      <figure className="profile-image">
        <img src={profile.avatar_url} alt={profile.login} />
      </figure>
      <div style={{ margin: "16px auto" }}>
        <h3 className="profile-name">{profile.name}</h3>
        <p className="profile-bio">{profile.bio}</p>
        <p className="profile-username">@{profile.login}</p>
      </div>
      <div className="info-follower">
        <p className="followers">
          {profile.followers} <span className="span-follow">followers</span>
        </p>
        <p className="following">
          {profile.following} <span className="span-follow">following</span>
        </p>
      </div>
      <span className="location">{profile.location}</span>
    </aside>
  );
}

export default Profile;