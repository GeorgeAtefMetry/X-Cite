/* eslint-disable react/jsx-no-undef */
import React from "react";

import { UserAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
const PrivateRoure = ({ children}) => {
  
  const { user } = UserAuth();
  return user? (children): (<Navigate to="/login" replace />);
  
};

export default PrivateRoure;
