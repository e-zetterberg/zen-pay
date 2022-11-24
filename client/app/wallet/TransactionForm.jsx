"use client";
import React from "react";
import Image from "next/image";
import InputAmount from "../../components/InputAmount";
import SendForm from "../../components/SendForm";
import { useState } from "react";
import "../../styles/account.css";

const TransactionForm = ({walletId}) => {
  const [action, setAction] = useState("deposit");

  return <>
    <div className="balance--button-container">
      <div>
        <button className="btn--transfer" onClick={(e) => setAction("transfer")}>
          <Image
            src="/../public/tx-button.png"
            alt="Transaction Button"
            width={50}
            height={50}
          ></Image>
        </button>
      </div>
      <button
        onClick={(e) => setAction("deposit")}
        className={action ==='deposit' ? 'btn': 'btn btn--inactive'}
      >
        Deposit
      </button>
      <button
        onClick={(e) => setAction("withdraw")}
        className={action ==='withdraw' ? 'btn': 'btn btn--inactive'}
      >
        Withdraw
      </button>
    </div>

    {action==="transfer" ? <SendForm walletId={walletId}/> : <InputAmount walletId={walletId} type={action}/>}
  </>;
};

export default TransactionForm;
