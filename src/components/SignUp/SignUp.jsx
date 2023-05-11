// import React from "react";
// import loginStyle from "./login.module.css";
// export default function Login() {
//   return <div>Login</div>;
// }
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const SignUp = () => {
  return (
    <div style={{ display: "flex" }}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default SignUp;
