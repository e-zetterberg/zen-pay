import React from "react";
import Link from "next/link";
import '../../styles/Balance.css'


const page = () => {
  return (
    <main className="homepage--balance">
      <div className="balance--display">1000 kr</div>
      <div className="balance--button-container">
        <Link href="/deposit">
        <button className="btn btn--deposit">Deposit</button>
        </Link>
        <Link href="/withdraw">
        <button className="btn btn--withdraw">Withdraw</button>
        </Link>
      </div>
    </main>
  );
};

export default page;
