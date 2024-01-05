import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from 'redux/auth/operations';

const UpdateProfile = () => {
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const handleChange = e => {
    setFile(e.target.files[0]);
    //console.log(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(file);
    dispatch(
      updateProfile(file)
    );
  };

  return (
    //<div>UpdateProfile</div>

    <div>
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange}/>   
      <button>Upload</button>
    </form>
    </div>

  // <div>
  //   <form onSubmit={handleSubmit}>
  //     <input type="file" name='file' onChange={handleChange} />
  //     <button type="submit">Upload</button>
  //   </form>
  // </div>

  )
}

export default UpdateProfile