import React from "react";

export default function Navbar() {
  return (
    <div
      style={{
        width: "100vw",
        height: "8vh",
        backgroundColor: "green",
        display: "flex",
        border: "2px solid black",
        boxSizing: "border-box",
      }}
    >
      <button
        type="submit"
        style={{
          boxShadow: "none",
          width: "33.33%",
          //   marginTop: "12px",
          //   borderRadius: "24px",
          padding: "10px 12px",
          //   color: white;
          //   backgroundColor: "#72db73",
          //   border: "none",
        }}
      >
        Buy
      </button>
      <button
        type="submit"
        style={{
          //   boxShadow: "none",
          width: "33.33%",

          //   marginTop: "12px",
          //   borderRadius: "24px",
          padding: "10px 12px",
          //   color: white;
          //   backgroundColor: "#72db73",
          //   border: "none",
        }}
      >
        Sell
      </button>
      <button
        type="submit"
        style={{
          boxShadow: "none",
          width: "33.33%",
          //   marginTop: "12px",
          //   borderRadius: "24px",
          padding: "10px 12px",
          //   color: white;
          //   backgroundColor: "#72db73",
          //   border: "none",
        }}
      >
        Recycle
      </button>
    </div>
  );
}
