import React, { useState } from 'react';
import './HomePage.css';

const HomePage = ({ addToCart }) => {
  const lotteryNumbers = [
    '865926',
    '773265',
    '1123363',
    '991224',
    '883447',
    '125478',
    '932145',
    '785945',
    '636481',
    '412254',
    '714569',
    '012345',
  ];

  const [searchNumbers, setSearchNumbers] = useState(Array(6).fill('')); // สถานะสำหรับเลขค้นหา
  const [filteredNumbers, setFilteredNumbers] = useState(lotteryNumbers); // สถานะสำหรับเลขที่กรองแล้ว
  const [selectedNumbers, setSelectedNumbers] = useState([]); // เก็บเลขที่ถูกเลือก

  // ฟังก์ชันอัปเดตเลขในช่องค้นหา
  const handleInputChange = (value, index) => {
    const newSearchNumbers = [...searchNumbers];
    newSearchNumbers[index] = value;
    setSearchNumbers(newSearchNumbers);
  };

  // ฟังก์ชันเลื่อนเคอร์เซอร์ไปช่องถัดไป
  const handleKeyUp = (e, index) => {
    const nextInput = document.getElementById(`search-input-${index + 1}`);
    if (e.target.value && nextInput) {
      nextInput.focus();
    }
  };

  // ฟังก์ชันค้นหาเลข
  const handleSearch = () => {
    const searchString = searchNumbers.join(''); // รวมเลขในช่องทั้งหมด
    if (searchString) {
      const filtered = lotteryNumbers.filter((number) =>
        number.startsWith(searchString)
      );
      setFilteredNumbers(filtered); // อัปเดตเลขที่กรอง
    } else {
      setFilteredNumbers(lotteryNumbers); // แสดงเลขทั้งหมดถ้าไม่มีการค้นหา
    }
  };

  // ฟังก์ชันเลือกเลข
  const handleSelectNumber = (number) => {
    if (!selectedNumbers.includes(number)) {
      setSelectedNumbers([...selectedNumbers, number]); // เพิ่มเลขในสถานะที่ถูกเลือก
      addToCart(number); // เพิ่มเลขไปยังตะกร้า
    }
  };

  return (
    <div className="home-container">
      {/* ส่วนค้นหาเลข */}
      <div className="search-section container">
        <h1>ค้นหาเลขเด็ด!</h1>
        <p>งวดวันที่ 2 มกราคม 2568</p>

        {/* ช่องค้นหาเลข */}
        <div className="search-box">
          {searchNumbers.map((num, index) => (
            <input
              id={`search-input-${index}`} // เพิ่ม ID สำหรับช่องค้นหาแต่ละช่อง
              type="text"
              key={index}
              placeholder=""
              className="search-input-number"
              maxLength="1"
              value={num}
              onChange={(e) => handleInputChange(e.target.value, index)} // อัปเดตสถานะเมื่อพิมพ์
              onKeyUp={(e) => handleKeyUp(e, index)} // เลื่อนเคอร์เซอร์ไปช่องถัดไป
            />
          ))}
        </div>

        {/* ปุ่มค้นหา */}
        <div className="search-buttons">
          <button className="search-button" onClick={handleSearch}>
            ค้นหาเลข
          </button>
          <button className="random-button">สุ่มตัวเลข</button>
        </div>
      </div>

      {/* ตารางแสดงเลข */}
      <div className="lottery-section container">
        <div className="lottery-grid">
          {filteredNumbers.map((number, index) => (
            <div className="lottery-item" key={index}>
              <h3>หวยไอยรา36</h3>
              <h1>{number}</h1>
              <button
                className={`choose-button ${
                  selectedNumbers.includes(number) ? 'selected' : ''
                }`} // เพิ่มคลาสถ้าถูกเลือกแล้ว
                onClick={() => handleSelectNumber(number)}
                disabled={selectedNumbers.includes(number)} // ปิดการคลิกถ้าเลือกแล้ว
              >
                {selectedNumbers.includes(number) ? 'ไม่ว่าง' : 'เลือกเลข'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;