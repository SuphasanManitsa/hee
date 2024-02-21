import React, { useState } from 'react';
import axios from 'axios';

function Test() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("image", imageFile);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,  // Moved here
    };

    axios.post("http://localhost:8080/admin/gg", formData, config)
      .then((response) => {
        // Handle success
        console.log("ok");
      })
      .catch((error) => {
        // Handle error
        console.log("err no ok");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="file"
          name="image"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Test;
