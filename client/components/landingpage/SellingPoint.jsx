import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const SellingPoint = ({ text, highlight, moreText }) => (
  <div className="dashboard--current-balance">
    <div className="dashboard--current-balance-text" />
    <div className="dashboard--balance">
      <div className="dashboard--amount">
        <span className="checkmark">
          <AiOutlineCheck strokeWidth={100} />
          {' '}
        </span>
        <span>{text}</span>
        <span className="sp-highlight">{highlight}</span>
        <span>{moreText}</span>
      </div>
      <div className="dashboard--currency" />
    </div>
  </div>
);

export default SellingPoint;
