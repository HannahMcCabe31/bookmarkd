import React from "react";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";

const Friends = () => {
  return (
    <>
      <Link to="/dashboard">
        <img src={backArrow} alt="backArrow" className="w-8 h-8" />
      </Link>
      <h1 className="text-white">Friends</h1>
    </>
  );
};

export default Friends;
