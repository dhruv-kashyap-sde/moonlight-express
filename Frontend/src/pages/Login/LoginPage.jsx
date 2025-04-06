import React, { useState, useEffect } from "react";
import "./Loginpage.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const URL = import.meta.env.VITE_API_URL;
  
  // Check if user is already logged in
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Since cookie is automatically sent, we just need to check if we're authenticated
        const response = await axios.post(`${URL}/admin/dashboard`, {}, {
          withCredentials: true // Important for sending cookies
        });
        
        if (response.data.success) {
          navigate("/admin");
        }
      } catch (error) {
        // User is not authenticated, stay on login page
        console.log("Not authenticated, showing login page");
      }
    };
    
    checkAuthStatus();
  }, [navigate, URL]);
  
  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Enhanced client-side validation
      if (!email || !password) {
        toast.error("Email and password are required");
        setLoading(false);
        return;
      }
      
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        setLoading(false);
        return;
      }
      
      // Password length validation
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        setLoading(false);
        return;
      }
      
      // Implement rate limiting on the client side
      if (loginAttempts >= 5) {
        toast.error("Too many login attempts. Please try again later.");
        setTimeout(() => setLoginAttempts(0), 60000); // Reset after 1 minute
        setLoading(false);
        return;
      }
      
      // Ensure API endpoint matches backend route exactly
      let response = await axios.post(`${URL}/admin/login`, 
        { email, password },
        { withCredentials: true }
      );
      
      if(response.data.success){ 
        // Reset login attempts on successful login
        setLoginAttempts(0);
        navigate("/admin");
        toast.success("Login successful");
      }
    } catch (error) {
      console.error("Login failed:", error);
      
      // Increment login attempts
      setLoginAttempts(prev => prev + 1);
      
      // More specific error handling
      if (error.response?.status === 429) {
        toast.error("Too many login attempts. Please try again later.");
      } else if (error.response?.status === 401) {
        toast.error("Invalid email or password");
      } else if (error.response?.status === 404) {
        toast.error("Login service unavailable. Please try again later.");
        console.error("Route mismatch detected: Check that frontend and backend routes are aligned.");
      } else {
        toast.error(`Login failed: ${error.response?.data?.message || "Unknown error"}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!email.trim() || !password.trim()) {
      toast.error("Email and password are required");
      return;
    }
    
    await login(email, password);
  };

  return (
    <div className="login-form-container">
      <div className="login-card">
        <h2 className="fw-300">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            autoComplete="username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
            autoComplete="current-password"
          />
          <button disabled={loading} className="secondary" type="submit">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {loginAttempts > 2 && (
          <p className="warning-text">
            Warning: {5 - loginAttempts} login attempts remaining before temporary lockout
          </p>
        )}
      </div>
    </div>
  );
};

export default Loginpage;
