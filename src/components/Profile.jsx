import React, { useState } from 'react';

function Profile({ user }) {
  const [nickname, setNickname] = useState('');
  const [bio, setBio] = useState('');
  const [pic, setPic] = useState(null);

  const handleUpload = (e) => {
    setPic(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Your Profile</h2>
      <input placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <br />
      <textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
      <br />
      <input type="file" onChange={handleUpload} />
      {pic && <img src={pic} alt="Profile preview" width={100} />}
    </div>
  );
}

export default Profile;
