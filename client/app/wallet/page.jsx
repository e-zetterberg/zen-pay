import React from "react";
import TransactionForm from "./TransactionForm";
import { unstable_getServerSession } from "next-auth";
import CreditCard from "../../components/CreditCard";

const Wallet = async () => {
  const session = await unstable_getServerSession();
  const email = session.user.email;
  const fetchUserId = async () => {
    const response = await fetch(`http://localhost:8080/api/users/${email}`);
    const data = await response.json();
    console.log("userId:" + data.userId);
    return data.userId;
  };

  const fetchBalance = async (userId) => {
    const response = await fetch(
      `http://localhost:8080/api/accounts/${userId}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  const userId = await fetchUserId();
  const data = await fetchBalance(userId);
  const walletId = data.accountId;

  return (
    <main className="homepage--balance">
      <section className="balance--container">
        <CreditCard balance={data.balance} holder={session.user.name} cardNumber={walletId}/>
        
        <TransactionForm max={data.balance} walletId={walletId}/>
        <div className="transaction-container">
          <h3>Transactions</h3>
          <hr />
          <ul>
            {data.transactions.map((tx) => (
              <li key={tx.transactionId}>
                <span>{tx.description} </span>
                <span>{tx.amount}kr </span>
                <span>{tx.timeStamp} </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
export default Wallet;
