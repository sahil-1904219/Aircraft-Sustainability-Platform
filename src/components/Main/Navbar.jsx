import React, { useState, useEffect } from "react";

import "./Nevbar.css";

function Nevbar() {
  const [selectedOption, setSelectedOption] = useState("buy");
  const [tableData, setTableData] = useState([]);
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState("");


  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploadError("");
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("http://localhost:8080/parts/uploadFile", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        setUploadError("File upload failed");
      }
    } catch (error) {
      console.error(error);
      setUploadError("File upload failed");
    }
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
            width: "25%",
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
            width: "25%",
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
            width: "25%",
            padding: "10px 12px",
          }}
          className={selectedOption === "recycle" ? "active" : ""}
          onClick={() => handleOptionChange("recycle")}
        >
          Recycle
        </button>
        <label
        style={{
          boxShadow: "none",
          width: "25%",
          padding: "10px 12px",
          }}
        >
      <input type="file" onChange={handleFileUpload} />
    </label>
        <button
          style={{
            padding: "10px 12px",
            }}
          onClick={handleFileChange}>Upload</button>

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