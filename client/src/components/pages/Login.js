import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoggedin, setLogstate] = useState(false);
  const [isAuthenticated, setAuthstate] = useState(true);
  const [userName, setUserdata] = useState("");
  const { email, password } = formData;

  const onChangehandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const formSubmithandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(formData);

    const res = await axios.post("/", body, config);

    console.log(res);
    if (res.data.msg) {
      console.log("Invalid");
      setAuthstate(false);
      setFormData({ email: "", password: "" });
    } else {
      setLogstate(() => {
        setUserdata(res.data.name);
        setAuthstate(true);
        return true;
      });
    }
  };
  let invalidmessage = (
    <p style={{ color: "red" }}>invalid credentials, enter again please.</p>
  );
  let loginpage = (
    <div style={{ fontWeight: "bold" }}>
      <div
        style={{
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "purple",
          color: "white",
          padding: "1rem",
        }}
      >
        {" "}
        Login
      </div>
      <div style={{ marginTop: "10%" }}>
        {!isAuthenticated && invalidmessage}
        <form onSubmit={(e) => formSubmithandler(e)}>
          <div>
            <input
              type="email"
              style={{ width: "20rem", height: "2rem" }}
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChangehandler(e)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              style={{ width: "20rem", height: "2rem", marginTop: "2%" }}
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={(e) => onChangehandler(e)}
              required
            />
          </div>
          <input
            type="submit"
            style={{
              marginTop: "5%",
              backgroundColor: "transparent",
              color: "red",
              border: "none",
              fontSize: "xx-large",
              fontFamily: "cursive",
            }}
            value="Login ->"
          />
        </form>
      </div>
    </div>
  );

  let profilepage = (
    <div style={{ fontWeight: "bold" }}>
      <div
        style={{
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "purple",
          color: "white",
          padding: "1rem",
        }}
      >
        Profilepage
      </div>
      <p> Hello {userName}</p>
    </div>
  );
  return <div>{!isLoggedin ? loginpage : profilepage}</div>;
};

export default Login;
