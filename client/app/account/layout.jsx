import Link from "next/link";
import Image from "next/image";


export default async function AccountLayout({ children }) {

    const fetchBalance = async () => {
        const response = await fetch('http://localhost:8080/api/accounts/1', {
          cache: 'no-store',
        });
        const data = await response.json();
        return data;
    };
   const data = await fetchBalance();
  return (
    
      <main className="main homepage--balance">
        <section className="balance--container">
        <div className="balance--display">{data.balance} kr</div>
        <div className="balance--button-container">
            <Image src="/../public/tx-button.png" alt="Transaction Button" width={50} height={50}></Image>
          <Link href="/account/send">
          </Link>
          <Link href="/account/deposit">
            <button className="btn btn--deposit">Deposit</button>
          </Link>
          <Link href="/account/withdraw">
            <button className="btn btn--withdraw">Withdraw</button>
          </Link>
        </div>
            {children}
        <div className="transaction-container">
          <h3>Transactions</h3>
          <hr />
          <ul>
            {data.transactions.map(tx => (
              <li key={tx.transactionId}>
                <span>{tx.description} </span>
                <span> {tx.amount}</span>
              </li>
            ))}
          </ul>
        </div>
        </section>
      </main>
    
  );
}
