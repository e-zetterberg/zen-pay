import React from 'react';

const BalanceDisplay = ({ name, balance, imgSrc }) => (
  <div className="dashboard--card">
    <div className="dashboard--current-balance">
      <div className="dashboard--current-balance-text">{name}</div>
      <div className="dashboard--balance">
        <div className="dashboard--amount">
          {balance}
        </div>
        <div className="dashboard--currency">€</div>
      </div>
    </div>
    {imgSrc ? (
      <img className="dashboard--crypto-image" alt="bitcoin price" src={imgSrc} />)
      : (<button type="button" className="dashboard--add-funds">+</button>)}
  </div>
);

export default BalanceDisplay;
