import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Main from "./components/Main/Main";
import React from "react";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        {/* {/* <Route path="/Genre" element={<Genre />} /> */}
        <Route path="/Main" element={<Main />} />
        {/* <Route path="/browse" element={<Browse />} /> */}
      </Routes>
    </>
  );
}
