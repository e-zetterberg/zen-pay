import React from 'react';
import Image from 'next/image';

const CryptoDisplay = ({ crypto, price, imgSrc }) => (
  <div className="dashboard--crypto">
    <div className="dashboard--current-balance">
      <div className="dashboard--current-balance-text">{crypto}</div>
      <div className="dashboard--balance">
        <div className="dashboard--amount">
          {price}
        </div>
        <div className="dashboard--currency">€</div>
      </div>
    </div>
    <Image className="dashboard--crypto-image" alt="bitcoin price" src={imgSrc} height={30} width={30} />
  </div>
);

export default CryptoDisplay;
