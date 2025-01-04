import React from 'react';
import './LotteryResult.css';

const LotteryResult = () => {
  return (
    <div className="lottery-result-container">
      {/* หัวข้อ */}
      <div className="lottery-header">
        <h1>ตรวจผลรางวัล</h1>
        <select className="select-round">
          <option>งวดวันที่ 16 ธันวาคม 2567</option>
          <option>งวดวันที่ 1 ธันวาคม 2567</option>
          <option>งวดวันที่ 16 พฤศจิกายน 2567</option>
        </select>
      </div>

      {/* ผลรางวัล */}
      <div className="result-section">
        <h2>ผลสลากกินแบ่งรัฐบาล</h2>
        <p>งวดวันที่ 16 ธันวาคม 2567</p>
        <div className="main-prize">
          <h3>รางวัลที่ 1</h3>
          <h1 className="prize-number">097863</h1>
          <p>รางวัลละ: 6,000,000 บาท</p>
        </div>

        {/* รางวัลเลขหน้า/ท้าย */}
        <div className="secondary-prizes">
          <div className="prize-group">
            <h4>เลขหน้า 3 ตัว</h4>
            <p>290 • 742</p>
          </div>
          <div className="prize-group">
            <h4>เลขท้าย 3 ตัว</h4>
            <p>339 • 881</p>
          </div>
          <div className="prize-group">
            <h4>เลขท้าย 2 ตัว</h4>
            <p>21</p>
          </div>
        </div>
      </div>

      {/* รางวัลรอง */}
      <div className="additional-prizes">
        <h3>รางวัลข้างเคียงรางวัลที่ 1</h3>
        <p>097862 • 097864</p>
      </div>

      {/* ตารางรางวัล */}
      <div className="other-prizes">
        <h3>รางวัลที่ 2</h3>
        <p>077335 • 142161 • 208137 • 773959 • 885770</p>

        <h3>รางวัลที่ 3</h3>
        <p>
          132601 • 164003 • 214955 • 232859 • 346727 • 431928<br />
          543369 • 546762 • 579783 • 623947 • 640812
        </p>

        <h3>รางวัลที่ 4</h3>
        <p>
          007120 • 033468 • 048329 • 078948 • 102452<br />
          149376 • 213467 • 240562 • 315084 • 415393
        </p>
      </div>
    </div>
  );
};

export default LotteryResult;