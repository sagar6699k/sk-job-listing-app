import React from "react";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = false;

  if (!token) {
    return navigate("/login");
  }
  return (
    <>
      {children}
    </>
  );
};
