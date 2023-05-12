import React, { useState } from "react";
import "./Nevbar.css";

function Nevbar() {
  const [selectedOption, setSelectedOption] = useState("buy");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // const getTableData = () => {
  //   // Replace with API call to fetch data based on selectedOption
  //   switch (selectedOption) {
  //     case "buy":
  //       return [
  //         { id: 1, name: "Component A", price: "$1000" },
  //         { id: 2, name: "Component B", price: "$500" },
  //         { id: 3, name: "Component C", price: "$2000" },
  //       ];
  //     case "sell":
  //       return [
  //         { id: 4, name: "Component D", price: "$1500" },
  //         { id: 5, name: "Component E", price: "$300" },
  //         { id: 6, name: "Component F", price: "$2500" },
  //       ];
  //     case "recycle":
  //       return [
  //         { id: 7, name: "Component G", weight: "100 kg" },
  //         { id: 8, name: "Component H", weight: "50 kg" },
  //         { id: 9, name: "Component I", weight: "200 kg" },
  //       ];
  //     default:
  //       return [];
  //   }
  // };
  const getTableData = async () => {
    try {
      let response;
      switch (selectedOption) {
        case "buy":
          response = await fetch("https://example.com/buy");
          break;
        case "sell":
          response = await fetch("https://example.com/sell");
          break;
        case "recycle":
          response = await fetch("https://example.com/recycle");
          break;
        default:
          return [];
      }
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("API call failed");
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };


  return (
    <div className="Nevbar">
      <nav>
        <button
           style={{
            boxShadow: "none",
            width: "33.33%",
            padding: "10px 12px",
          }}

          className={selectedOption === "buy" ? "active" : ""}
          onClick={() => handleOptionChange("buy")}

        >
          Buy
        </button>
        <button
           style={{
            boxShadow: "none",
            width: "33.33%",
            padding: "10px 12px",
          }}
          className={selectedOption === "sell" ? "active" : ""}
          onClick={() => handleOptionChange("sell")}
        >
          Sell
        </button>
        <button
           style={{
            boxShadow: "none",
            width: "33.33%",
            padding: "10px 12px",
          }}
          className={selectedOption === "recycle" ? "active" : ""}
          onClick={() => handleOptionChange("recycle")}
        >
          Recycle
        </button>
      </nav>
      <h2>{selectedOption}</h2>
      <table>
        <thead>
          <tr>
            {selectedOption === "buy" || selectedOption === "sell" ? (
              <>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
              </>
            ) : (
              <>
                <th>ID</th>
                <th>Name</th>
                <th>Weight</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {getTableData().map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{selectedOption === "buy" || selectedOption === "sell" ? item.price : item.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Nevbar;
