import React, { useState } from "react";
import rightStyle from "./rightSide.module.css";
import { useNavigate } from "react-router-dom";
export default function RightSide() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    password: "",
    UserType: "",
    checkBox: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    let value = e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
    setFormErrors({
      ...formErrors,
      [e.target.name]:
        value.trim() === "" ? `${e.target.name} is required` : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let valid = true;

    Object.entries(formValues).forEach(([key, value]) => {
      if (typeof value === "string" && value.trim() === "") {
        errors[key] = `${key} is required`;
        valid = false;
      }
      if (key === "password") {
        if (value.length < 1) {
          setFormErrors({
            ...formErrors,
            [e.target.password]: "password is required",
          });
          valid = false;
        }
      }
      if (!formValues["check"]) {
        errors["checkBox"] = "You must agree to share your registration data";
        valid = false;
      }
    });

    setFormErrors(errors);

    if (valid) {
      console.log("s");
      window.localStorage.setItem("userData", JSON.stringify(formValues));
      // navigate("/Genre");
    }
  };

  return (
    <>
      <div className={rightStyle.rightSide}>
        <p className={rightStyle.SuperText}>SIGN UP</p>
        <div className={rightStyle.upperText}>
          <p>Create a new Account</p>
        </div>
        <form>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Name"
            required
          ></input>
          {formErrors.name && (
            <p className={rightStyle.error}>{formErrors.name}</p>
          )}
          <input
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="UserName"
            required
          ></input>
          {formErrors.username && (
            <p className={rightStyle.error}>{formErrors.username}</p>
          )}
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            required
          ></input>
          {formErrors.password && (
            <p className={rightStyle.error}>{formErrors.password}</p>
          )}
          <select
            id="formSelect"
            name="UserType"
            className="formSelect"
            onChange={handleChange}
          >
            <option value="">User Type</option>
            <option value="HTML">Aircraft Manufacturers</option>
            <option value="CSS">Airline</option>
            <option value="JS">Recycling facilities</option>
          </select>
          {formErrors.UserType && (
            <p className={rightStyle.error}>{formErrors.UserType}</p>
          )}
          <label>
            <input
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.checked,
                })
              }
              type="checkbox"
              name="check"
            />
            Share my registration data with Superapp
          </label>
          {formErrors.checkBox && (
            <p className={rightStyle.error}>{formErrors.checkBox}</p>
          )}
          <button type="submit" onClick={handleSubmit}>
            SIGN UP
          </button>
        </form>
        <footer className={rightStyle.footer}>
          <p>
            By clicking on Sign up. you agree to Superapp
            <span style={{ color: "green" }}> Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp
            <span style={{ color: "green" }}> Privacy Policy</span>
          </p>
        </footer>
      </div>
    </>
  );
}
