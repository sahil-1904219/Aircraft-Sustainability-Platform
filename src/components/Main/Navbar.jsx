import React, { useState, useEffect } from "react";
import "./Nevbar.css";

function Nevbar() {
  const [selectedOption, setSelectedOption] = useState("buy");
  const [tableData, setTableData] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const getTableData = async () => {
      try {
        let response;
        switch (selectedOption) {
          case "buy":
            response = await fetch("http://localhost:8080/parts/newParts");
            break;
          case "sell":
            response = await fetch("http://localhost:8080/parts/oldParts");
            break;
          case "recycle":
            response = await fetch("http://localhost:8080/parts/recycle");
            break;
          default:
            return [];
        }
        if (response.ok) {
          const data = await response.json();
          setTableData(data);
        } else {
          throw new Error("API call failed");
        }
      } catch (error) {
        console.error(error);
        setTableData([]);
      }
    };
    getTableData();
  }, [selectedOption]);

  const getColumns = () => {
    switch (selectedOption) {
      case "buy":
        return [ "Manufacturer",
        "Aircraft Model",
        "Part Name",
        "Material Composition",
        "Age (years)",
        "Location"];
      case "sell":
        return [ "Manufacturer",
        "Potential Uses",
        "Aircraft Model",
        "Part Name",
        "Material Composition",
        "Age (years)",
        "Location"];
      case "recycle":
        return ["id", "name", "weight"];
      default:
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
            {getColumns().map((column) => (
              <th key={column}>{column.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              {getColumns().map((column) => (
                <td key={column}>{item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Nevbar;
