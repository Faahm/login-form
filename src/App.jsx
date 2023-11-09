import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    updateButtonState(e.target.value, password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    updateButtonState(username, e.target.value);
  };

  const updateButtonState = (newUsername, newPassword) => {
    setIsButtonEnabled(newUsername.trim() !== "" && newPassword.trim() !== "");
  };

  const handleLogin = () => {
    if (username === "root" && password === "root") {
      alert("Logged in.");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button onClick={handleLogin} disabled={!isButtonEnabled}>
        Login
      </button>
    </div>
  );
};

export default App;
