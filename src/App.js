import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Main from "./components/Main/Main";
import React from "react";
import Manufacturer from "./components/Main/ManufacturerNavbar";
import Recycler from "./components/Main/RecycleNavbar";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />

        <Route path="/Main" element={<Main />} />
        <Route path="/Manufacturer" element={<Manufacturer />} />
        <Route path="/Recycler" element={<Recycler />} />
      </Routes>
    </>
  );
}
