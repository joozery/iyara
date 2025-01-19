import React, { useState, useRef } from "react";
import * as XLSX from "xlsx"; // Import the XLSX library
import "./AddLottery.css";

const AddLottery = () => {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const [lotteryList, setLotteryList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRefs = useRef([]);

  // Handle changes in input fields
  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);

      if (value !== "" && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle adding a new lottery number
  const handleAddLottery = () => {
    const fullNumber = inputs.join("");
    if (fullNumber.length === 6) {
      setLotteryList([...lotteryList, fullNumber]);
      setInputs(["", "", "", "", "", ""]);
      inputRefs.current[0].focus();
    } else {
      alert("กรุณากรอกเลขให้ครบ 6 หลัก");
    }
  };

  // Handle key press for 'Enter' to add the lottery number
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddLottery();
    }
  };

  // Handle file input and parse the Excel file
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: "binary" });

        // Assuming the first sheet contains the lottery numbers in a column
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const range = XLSX.utils.decode_range(worksheet["!ref"]);
        const lotteryNumbers = [];

        for (let row = range.s.r; row <= range.e.r; row++) {
          const cell = worksheet[XLSX.utils.encode_cell({ r: row, c: 0 })];
          if (cell) {
            const number = cell.v.toString().padStart(6, "0"); // Ensure it's 6 digits
            lotteryNumbers.push(number);
          }
        }

        setLotteryList(lotteryNumbers);
      };
      reader.readAsBinaryString(file);
    }
  };

  // Handle search query input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter lottery list based on the search query
  const filteredLotteryList = lotteryList.filter((lottery) =>
    lottery.includes(searchQuery)
  );

  return (
    <div className="add-lottery-container">
      <h1>เพิ่มรายการหวย</h1>
      <div className="lottery-input-container">
        {inputs.map((input, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            className="lottery-input"
            placeholder="-"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={handleKeyPress}  // Add key press event for 'Enter'
          />
        ))}
        <button className="add-lottery-button" onClick={handleAddLottery}>
          เพิ่มหวย
        </button>
      </div>

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาหวย"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* File upload */}
      <div className="file-upload-container">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
        />
      </div>

      <div className="lottery-list">
        <h2>รายการหวยที่เพิ่ม</h2>
        <table className="lottery-table">
          <thead>
            <tr>
              <th>NO.</th>
              <th>เลขที่เพิ่ม</th>
              <th>ลบ</th>
            </tr>
          </thead>
          <tbody>
            {filteredLotteryList.map((lottery, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{lottery}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() =>
                      setLotteryList(lotteryList.filter((_, i) => i !== index))
                    }
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddLottery;
