import { useEffect } from "react";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";
const Private = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return <Navigate to="/login" />;

    const requestAccess = async () => {
      let response = await axios
        .post("http://localhost:5000/api/admin/dashboard", { token })
        .then(() => {
          if (response.data.success) {
            return <Outlet />;
          }
        })
        .catch(() => {
          console.log("error login failed");
          toast.error("error login failed");
          return <Navigate to="/login" />;
        });
    };

    requestAccess();
  }, []);
};

export default Private;
