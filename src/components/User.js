import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
function User() {
  const {name} = useSelector(state => state.user);
  return (
    <div>
      <h1>Usuario:</h1>
      <h2>{name}</h2>

    </div>
  );
}

export default User;
