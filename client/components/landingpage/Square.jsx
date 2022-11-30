import React from 'react';
import '../../styles/landingpage.css';

const SellingPoint = ({ text, highlight, moreText }) => (
  <div className="square--card">
    <div className="square--current-balance">
      <div className="square--current-balance-text" />
      <div className="square--balance">
        <div className="square--amount">
          <span>{text}</span>
          <span className="sp-highlight">{highlight}</span>
          <span>{moreText}</span>
        </div>
        <div className="square--currency" />
      </div>
    </div>
  </div>
);

export default SellingPoint;
