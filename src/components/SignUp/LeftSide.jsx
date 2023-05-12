import React, { useState } from "react";
import leftStyle from "./leftSide.module.css";
export default function LeftSide() {
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    let value = e.target.value;
    setLoginValues({ ...loginValues, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    if (valid) {
      console.log("s");
      window.localStorage.setItem("userData", JSON.stringify(loginValues));
      // navigate("/Genre");
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
