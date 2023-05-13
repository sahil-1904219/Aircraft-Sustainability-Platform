import React, { useState } from "react";
import rightStyle from "./rightSide.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function RightSide() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    checkBox: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    let value = e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
    if (e.target.name === "password") {
      if (value.length > 10) {
        setFormErrors({
          ...formErrors,
          [e.target.name]: "Password Too Big",
        });
        return;
      } else if (value.length < 8) {
        setFormErrors({
          ...formErrors,
          [e.target.name]: "Password Too Short",
        });
        return;
      }
    }
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
      // console.log("s");
      // window.localStorage.setItem("userData", JSON.stringify(formValues));
      // navigate("/Genre");

      // ... form validation code ...

      console.log("s");

      // Make a POST request to the API
      axios
        .post("http://localhost:8080/auth/signup", formValues)
        .then((response) => {
          console.log(response.data);
          alert("You have successfully signed up!");
          // Optionally, you can redirect the user to a success page or show a success message
        })
        .catch((error) => {
          console.error(error);
          // Handle any errors here
        });
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
            name="email"
            placeholder="UserName"
            required
          ></input>
          {formErrors.email && (
            <p className={rightStyle.error}>{formErrors.email}</p>
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
            name="role"
            className="formSelect"
            onChange={handleChange}
          >
            <option value="">User Type</option>
            <option value="Aircraft Manufacturers">
              Aircraft Manufacturers
            </option>
            <option value="Airline">Airline</option>
            <option value="Recycling facilities">Recycling facilities</option>
          </select>
          {formErrors.role && (
            <p className={rightStyle.error}>{formErrors.role}</p>
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
