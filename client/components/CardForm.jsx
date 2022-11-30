'use client';

import React, { useState } from 'react';
import Cleave from 'cleave.js/react';
import '../styles/CardForm.css';
import 'animate.css';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseApiPath } from '../lib/fetching';
import ToastifyMessage from './ToastifyMessage';

const CardForm = ({ accountId }) => {
  const router = useRouter();
  const [cardNum, setCardNum] = useState('');
  const [cardHolder, setCardHolder] = useState('Your Full Name');
  const [expireMonth, setExpireMonth] = useState('MM');
  const [expireYear, setExpireYear] = useState('YYYY');
  const handleNum = (e) => {
    setCardNum(e.target.rawValue);
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

  const saveCardDetails = async (e) => {
    e.preventDefault();
    const data = {
      cardNum,
      cardHolder,
      expireMonth,
      expireYear,
    };
    const response = await fetch(`${baseApiPath}/accounts/${accountId}/card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      await toast.success('Card Added to Wallet Successfully !', {
        position: toast.POSITION.TOP_CENTER,
      });
      router.push('/wallet');
      router.refresh();
    }
  };
  return (
    <div className="card-form-container">
      <div className="card--page-title">Connect your card to Zen Wallet</div>
      <div className="card--container">

        <form id="form" onSubmit={(e) => saveCardDetails(e)}>
          <div className="input-container">
            <h4>Enter card number</h4>
            <Cleave
              required
              delimiter="-"
              options={{
                numericOnly: true,
                creditCard: true,
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

          <button type="submit">Connect</button>
        </form>
        <ToastifyMessage />
      </div>
    </div>
  );
};

export default CardForm;
