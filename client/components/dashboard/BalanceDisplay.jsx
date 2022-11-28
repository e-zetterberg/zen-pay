import React from 'react';
import Image from 'next/image';

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
      <Image className="dashboard--crypto-image" alt="bitcoin price" src={imgSrc} height={50} width={50} />)
      : (<button type="button" className="dashboard--add-funds">+</button>)}
  </div>
);

export default BalanceDisplay;
