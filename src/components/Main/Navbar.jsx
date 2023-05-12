import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nevbar.css";

function Nevbar() {
  const [selectedOption, setSelectedOption] = useState("buy");
  const [tableData, setTableData] = useState([]);
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const navigate = useNavigate();
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      setUploadError("");
    }
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
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/");
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
        return [
          "Manufacturer",
          "Aircraft Model",
          "Part Name",
          "Material Composition",
          "Age (years)",
          "Location",
        ];
      case "sell":
        return [
          "Manufacturer",
          "Potential Uses",
          "Aircraft Model",
          "Part Name",
          "Material Composition",
          "Age (years)",
          "Location",
        ];
      case "recycle":
        return [
          "Manufacturer",
          "Recycle Rate",
          "Aircraft Model",
          "Part Name",
          "Material Composition",
          "Age (years)",
          "Location",
        ];
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
      <div className="buttoncolor" style={{ display: "flex", height: "8vh" }}>
        <h2 style={{ paddingRight: "63vw" }}>{selectedOption}</h2>
        <button style={{ width: "33.33%" }} onClick={handleLogout}>
          {" "}
          Logout
        </button>
      </div>
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
