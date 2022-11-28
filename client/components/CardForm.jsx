'use client';

import React, { useState } from 'react';
import Cleave from 'cleave.js/react';
import '../styles/CardForm.css';
import 'animate.css';

const imageUrls = [
  'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png',
  'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png',
  'https://www.discover.com/company/images/newsroom/media-downloads/discover.png',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg',
  'https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/diners_club-512.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png',
];

const CardForm = () => {
  const [creditCardNum, setCreditCardNum] = useState('#### #### #### ####');
  const [cardHolder, setCardHolder] = useState('Your Full Name');
  const [expireMonth, setExpireMonth] = useState('MM');
  const [expireYear, setExpireYear] = useState('YYYY');
  const [cardTypeUrl, setCardTypeUrl] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');
  // const [flip, setFlip] = useState(null);

  const handleNum = (e) => {
    setCreditCardNum(e.target.rawValue);
  };

  const handleType = (type) => {
    if (type === 'visa') {
      setCardTypeUrl(imageUrls[0]);
    } else if (type === 'mastercard') {
      setCardTypeUrl(imageUrls[1]);
    } else if (type === 'discover') {
      setCardTypeUrl(imageUrls[2]);
    } else if (type === 'amex') {
      setCardTypeUrl(imageUrls[3]);
    } else if (type === 'diners') {
      setCardTypeUrl(imageUrls[4]);
    } else if (type === 'jcb') {
      setCardTypeUrl(imageUrls[5]);
    }
  };

  const handleCardHolder = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpMonth = (e) => {
    setExpireMonth(e.target.value);
  };

  const handleExpYear = (e) => {
    setExpireYear(e.target.value);
  };

  // cleave.js logic

  return (
    <div className="card--container">
      <form id="form">
        <div id="card">
          <div className="card--header">
            <div className="sticker" />
            <div>
              <img className="logo" src={cardTypeUrl} alt="Card logo" />
            </div>
          </div>
          <div className="card--body">
            <h2 id="creditCardNumber">{creditCardNum}</h2>
          </div>
          <div className="card--footer">
            <div>
              <h4>Card Holder</h4>
              <h5>{cardHolder}</h5>
            </div>
            <div>
              <h4>Expires</h4>
              <h5>
                {expireMonth}
                {' '}
                /
                {' '}
                {expireYear}
              </h5>
            </div>
          </div>
        </div>

        <div className="input-container mt">
          <h4>Enter card number</h4>
          <Cleave
            required
            delimiter="-"
            options={{
              creditCard: true,
              onCreditCardTypeChanged: handleType,
            }}
            onChange={handleNum}
            placeholder="Please enter your credit card number"
          />
        </div>

        <div className="input-container">
          <h4>Card Holder</h4>
          <input onChange={handleCardHolder} type="text" placeholder="Please enter your full name" required />
        </div>

        <div className="input-grp">
          <div className="input-container">
            <h4>Exp Year</h4>
            <select value={expireYear} onChange={handleExpYear}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className="input-container">
            <h4>Month</h4>
            <select value={expireMonth} onChange={handleExpMonth}>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2021">2030</option>
            </select>
          </div>
          <div className="input-container">
            <h4>CVV</h4>
            <input type="password" placeholder="CVV" required />
          </div>
        </div>

        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default CardForm;
