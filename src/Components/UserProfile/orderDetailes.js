import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import db from "../../firebase";
import "./UserProfile.css";

function OrderDetailes() {
  return (
    <div>
        <h2> My Orders </h2>
        <p>You have placed no orders.</p>
    </div>
  );
}

export default OrderDetailes;
