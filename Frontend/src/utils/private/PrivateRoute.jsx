import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const PrivateRoute = ({role}) => {
  const token = localStorage.getItem('token');

  if(!token) return <Navigate to='/login' />;
   try {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    
    if (decodedToken.role === role) {
        return <Outlet/>;
    } else {
        <Navigate to={'/login'}/>
    }
   } catch (error) {
    console.log(error);
    
   }
}

export default PrivateRoute;