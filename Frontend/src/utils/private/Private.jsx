import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const requestAccess = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/admin/dashboard", { token });
        console.log(response.data);

        if (response.data.success) {
          setHasAccess(true);
        } else {
          setHasAccess(false);
          toast.error("Access denied");
        }
      } catch (error) {
        console.log("error login failed");
        toast.error("error login failed");
        setHasAccess(false);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      requestAccess();
    } else {
      setLoading(false);
      setHasAccess(false);
    }
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!token || !hasAccess) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Private;
