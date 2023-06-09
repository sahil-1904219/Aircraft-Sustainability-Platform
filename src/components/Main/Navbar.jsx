import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Nevbar.css";

function Nevbar() {
  const [selectedOption, setSelectedOption] = useState("buy");
  const [tableData, setTableData] = useState([]);
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const [limit, setLimit] = useState(1000);
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
          default:
            return [];
        }
        if (response.ok) {
          const data = await response.json();
          setTableData(data.map((item) => ({ ...item, searchQuery: "" })));

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

  const handleSearch = () => {
    const filteredData = tableData.map((item) => ({
      ...item,
      searchQuery,
    })).filter((item) => {
      return Object.values(item).some(
        (value) =>
          value &&
          value
            .toString()
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }).slice(0,limit);
    setTableData(filteredData);
  };


  return (
    <div className="Nevbar">
      <nav>
        <button
          style={{
            boxShadow: "none",
            width: "33.3%",
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
            width: "33.3%",
            padding: "10px 12px",
          }}
          className={selectedOption === "sell" ? "active" : ""}
          onClick={() => handleOptionChange("sell")}
        >
          Sell
        </button>
        {/* <button
          style={{
            boxShadow: "none",
            width: "25%",
            padding: "10px 12px",
          }}
          className={selectedOption === "recycle" ? "active" : ""}
          onClick={() => handleOptionChange("recycle")}
        >
          Recycle
        </button> */}
        <button
          style={{
            boxShadow: "none",
            width: "33.3%",
            padding: "10px 12px",
          }}
          onClick={handleLogout}
        >
          {" "}
          Logout
        </button>
      </nav>
      {/* <div className="buttoncolor" style={{ display: "flex", height: "8vh" }}> */}
      {/* <h2 style={{ paddingRight: "63vw" }}>{selectedOption}</h2> */}
      <h2 style={{ textAlign: "center" }}>
        <u>AIRLINE</u>
      </h2>
      {/* </div> */}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
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
          {tableData
            .filter((item) => item.searchQuery.includes(searchQuery))
            .map((item) => (
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
