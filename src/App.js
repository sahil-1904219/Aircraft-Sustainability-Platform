import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import React from "react";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        {/* <Route path="/Genre" element={<Genre />} />
        <Route path="/Movies" element={<Movies />} /> */}
        {/* <Route path="/browse" element={<Browse />} /> */}
      </Routes>
    </>
  );
}
