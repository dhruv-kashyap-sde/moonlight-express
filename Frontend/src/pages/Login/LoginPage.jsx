import React, { useState } from "react";
import "./Loginpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ loading, setLoading ] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await response.json();
      localStorage.setItem("token", data.token);
      if (data.role === "admin") {
        navigate("/admin");
        toast.success("Login Successful");
      } else {
        toast.error("Invalid Credentials");
        navigate("/login");
      }
      console.log(data);
    } catch (error) {
      toast.error("Invalid Credentials");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-card">
        <h2 className="fw-300"> Admin Login</h2>
        <form>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <button disabled={loading} onClick={handleSubmit} className="secondary" type="submit">
            {loading ? "Loading" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
