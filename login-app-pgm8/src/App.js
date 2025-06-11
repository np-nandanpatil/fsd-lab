import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "nandan@gmail.com" && password === "123456") {
      setMsg("Login successful!");
    }
    else {
      setMsg("Invalid email or password.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      {msg && <p>{msg}</p>}
    </form>
  );
};

export default LoginForm;
