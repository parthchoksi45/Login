import React from "react";
import { Link, Redirect } from "react-router-dom";
const Homepage = () => {
  return (
    <div
      style={{
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "purple",
          color: "white",
          padding: "1rem",
        }}
      >
        HOMEPAGE
      </div>

      <button
        style={{
          marginTop: "5%",
          backgroundColor: "transparent",
          color: "red",
          border: "none",
        }}
      >
        <Link
          to="/login"
          style={{ color: "red", fontSize: "xx-large", fontFamily: "cursive" }}
        >
          Login
        </Link>
      </button>
    </div>
  );
};

export default Homepage;
