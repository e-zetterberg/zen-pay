import React from 'react';

const BalanceDisplay = ({ name, balance }) => (
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
    <button type="button" className="dashboard--add-funds">+</button>
  </div>
);

export default BalanceDisplay;
