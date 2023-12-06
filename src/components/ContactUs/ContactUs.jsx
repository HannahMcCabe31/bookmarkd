import React from "react";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <Link to="/settings">
        <img src={backArrow} alt="backArrow" className="w-8 h-8" />
      </Link>
      <div>
        <h1 className="text-white">ContactUs</h1>
      </div>
    </>
  );
};

export default ContactUs;
