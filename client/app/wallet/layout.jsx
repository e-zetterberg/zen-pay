import React from "react";
import Link from "next/link";
import Image from "next/image";
import { unstable_getServerSession } from "next-auth";

export default async function AccountLayout({ children, params }) {
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

  return (
    <main className="main homepage--balance">
      <section className="balance--container">
        <div className="balance--display">{data.balance} kr</div>

        {children}
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
