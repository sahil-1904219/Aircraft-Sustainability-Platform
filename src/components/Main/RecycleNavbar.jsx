import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nevbar.css";

function RecycleNavbar() {
  const [selectedOption, setSelectedOption] = useState("recycle");
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
        {/* <button
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
        </button> */}
        <button
          style={{
            boxShadow: "none",
            width: "50%",
            padding: "10px 12px",
          }}
          className={selectedOption === "recycle" ? "active" : ""}
          onClick={() => handleOptionChange("recycle")}
        >
          Recycle
        </button>
        <button
          style={{
            boxShadow: "none",
            width: "50%",
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
        <u>RECYCLER</u>
      </h2>
      {/* </div> */}
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

export default RecycleNavbar;
