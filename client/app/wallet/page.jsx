import React from "react";
import TransactionForm from "./TransactionForm";
import { unstable_getServerSession } from "next-auth";
import CreditCard from "../../components/CreditCard";
import Link from "next/link";
import "../../styles/transactions.css";

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
    <main className="main homepage--balance">
      <section className="balance--container">
        <CreditCard
          balance={data.balance}
          holder={session.user.name}
          cardNumber={walletId}
        />

        <TransactionForm max={data.balance} walletId={walletId} />
        <div className="transactions--header-container">
          <Link href={"/wallet/transactions"}>
            <h3 className="transactions--header">Transactions</h3>
          </Link>
          <hr />
        </div>
        <div className="transaction-container">
          <ul className="transaction-list">
            {data.transactions.map((tx) => (
              <li key={tx.transactionId}>
                <span>{tx.amount}€ </span>
                <span className="tx-description">{tx.description} </span>
                <div>{tx.timeStamp} </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Wallet;
