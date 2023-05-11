import React from "react";
import leftStyle from "./leftSide.module.css";
export default function LeftSide() {
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  return (
    <>
      <div className={leftStyle.leftSide}>
        <p className={leftStyle.login}>LOGIN</p>
        <form>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="User Name"
            required
          ></input>
          {/* {formErrors.name && (
            <p className={rightStyle.error}>{formErrors.name}</p>
          )} */}
          <input
            onChange={handleChange}
            type="Password"
            name="username"
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
