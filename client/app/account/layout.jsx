import Link from "next/link";

export default function AccountLayout({ children }) {
  return (
    
      <main className="main homepage--balance">
        <section className="balance--container">
        <div className="balance--display">1000 kr</div>
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
