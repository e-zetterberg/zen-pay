import Link from "next/link";

export default async function AccountLayout({ children }) {

    const fetchBalance = async () => {
        const response = await fetch('http://localhost:8080/api/accounts/1')
        const data = await response.json();
        return data.balance;
    };
   const balance = await fetchBalance();
  return (
    
      <main className="main homepage--balance">
        <section className="balance--container">
        <div className="balance--display">{balance} kr</div>
        <div className="balance--button-container">
          <Link href="/account/deposit">
            <button className="btn btn--deposit">Deposit</button>
          </Link>
          <Link href="/account/withdraw">
            <button className="btn btn--withdraw">Withdraw</button>
          </Link>
        </div>
            {children}
        </section>
      </main>
    
  );
}
