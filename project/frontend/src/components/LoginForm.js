// src/LoginForm.js
import React, { useState, useContext } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

import { UserContext } from "../components/UserProvider";
import axios from "axios";
import "./auth.css";

const LoginForm = () => {
  const [uusername, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email: uusername,
          password: password,
        }
      );
      const authResponse = response.data;
      if (authResponse && authResponse.accessToken) {
        const userResponse = await axios.get(
          `http://localhost:8080/api/users/email/${uusername}`
        );
        const user = userResponse.data;
        console.log(user);
        login(user);
        const res = await axios.get(
          `http://localhost:8080/api/users/user/${uusername}`
        );
        const uid = res.data;
        setUserId(uid);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Email"
              value={uusername}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="new_button" type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
