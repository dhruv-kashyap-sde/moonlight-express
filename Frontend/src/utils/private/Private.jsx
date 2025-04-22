import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Loaders from "../Loader/Loaders";

const Private = () => {
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const URL = import.meta.env.VITE_API_URL;

    const requestAccess = async () => {
      try {
        if (isMounted) {
          setLoading(true);
        }

        // Ensure route matches the backend endpoint exactly
        const response = await axios.get(`${URL}/admin/dashboard`, {
          withCredentials: true,
        });
        console.log("siccesfful login",response.data);
        
        if (isMounted && response.data.success) {
          setHasAccess(true);
        }
      } catch (error) {
        console.log("error when no login", error);
        
        if (isMounted) {
          console.error("Authentication error:", error.message);

          // More specific error messages based on error type
          if (error.response?.status === 401) {
            toast.error("Your session has expired. Please login again.");
          } else if (error.response?.status === 403) {
            toast.error("You don't have permission to access this area.");
          } else if (error.response?.status === 404) {
            toast.error("Server endpoint not found. Please contact an administrator.");
            console.error("Route mismatch detected: Check that frontend and backend routes are aligned.");
          } else {
            toast.error("Authentication failed. Please try again later.");
          }
          setHasAccess(false);

          // Redirect to login on auth failure
          navigate("/login", { replace: true });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    requestAccess();

    // Cleanup function to prevent state updates on unmounted component
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  // Show a proper loading component
  if (loading) {
    return <Loaders />;
  }

  if (!hasAccess) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Private;
