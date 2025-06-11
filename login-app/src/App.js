import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "nandan@gmail.com" && password === "123456") {
      setMessage("Login successful!");
    }
    else {
      setMessage("Invalid email or password.");
    }
  }

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <br />
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <br />
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  )


};

export default LoginForm;
