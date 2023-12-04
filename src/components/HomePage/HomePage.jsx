import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="text-white  text-3xl">
        <h1>Welcome back, </h1>
        {props.token.user.user_metadata.username}
        <br />
        <button className="border p-1" onClick={handleClick}>
          LoginPage
        </button>
      </div>
    </>
  );
};

export default HomePage;
