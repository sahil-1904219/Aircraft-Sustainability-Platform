import React, { useState } from "react";
import leftStyle from "./leftSide.module.css";
import { useNavigate } from "react-router-dom";
export default function LeftSide() {
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    let value = e.target.value;
    setLoginValues({ ...loginValues, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    // if (valid) {
    //   // console.log("s");
    //   // window.localStorage.setItem("userData", JSON.stringify(loginValues));

    // }
    if (valid) {
      fetch("Login api -http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(loginValues),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            navigate("/Main");
          } else {
            console.log("q");
          }
        })
        .catch((error) => console.error(error));
    }
  };
  return (
    <>
      <div className={leftStyle.leftSide}>
        <p className={leftStyle.login}>LOGIN</p>
        <form>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="User Name"
            required
          ></input>
          {/* {formErrors.name && (
            <p className={rightStyle.error}>{formErrors.name}</p>
          )} */}
          <input
            onChange={handleChange}
            type="Password"
            name="password"
            placeholder="Password"
            required
          ></input>

          <button type="submit" onClick={handleSubmit}>
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
}
