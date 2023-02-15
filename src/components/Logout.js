import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { logout } from "../redux/userSlice";
function Logout() {const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Logout;
