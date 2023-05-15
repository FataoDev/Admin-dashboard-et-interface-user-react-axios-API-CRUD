import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <div className="error">
      <div>Erreur 404 !</div>
      <div>Page Not Found</div>
      <Link to="/">
        <button className="btn">Go to Home</button>
      </Link>
    </div>
  );
};

export default Error;
