import React from "react";
import '../../styles/Balance.css'


const page = () => {
  return (
    <main className="homepage--balance">
      <div className="balance--display">1000 kr</div>
      <div className="balance--button-container">

        <button className="btn btn--deposit">Deposit</button>
        <button className="btn btn--withdraw">Withdraw</button>
        <button className="btn btn--withdraw">Withdraw</button>
        <form>
            <input type="text" />
            <button type="submit">Confirm</button>
        </form>
      </div>
    </main>
  );
};

export default page;
