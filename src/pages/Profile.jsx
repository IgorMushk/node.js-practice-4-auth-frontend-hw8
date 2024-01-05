import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors'

const Profile = () => {
   //const user = useSelector(selectUser);
   //console.log(user);
   const {name, email, avatar} = useSelector(selectUser);
   console.log(avatar.includes('gravatar') ? avatar : `http://localhost:8000/${avatar}`);
  return (
    // <div>Profile</div>
    <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <img src={avatar.includes('gravatar') ? avatar : `http://localhost:8000/${avatar}`} alt="avatar" width="200" />
        <p/>
        <Link to="update"> Update Profile </Link>
    </div>
  )
}

export default Profile

// <img src={avatar} alt="avatar" />