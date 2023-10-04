import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PriveteRoute = ({children}) => {
    
    const{user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>;
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
    
};

export default PriveteRoute;

PriveteRoute.propTypes = {
    children: PropTypes.node,
  };