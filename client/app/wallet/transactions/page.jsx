import "../../../styles/transactionspage.css"
import { unstable_getServerSession } from "next-auth";

const Transactions = async () => {
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
    <main className="main">
      <div className="transactions--header-container">
        <h3 className="transactions--header">Transactions</h3>
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
    </main>
  );
};

export default Transactions;