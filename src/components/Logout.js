import React from "react";
import { Button } from "react-bootstrap";
function Logout() {
  const handleLogout = () => {
    console.log("Logout");
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Logout;
