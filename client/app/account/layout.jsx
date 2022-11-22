import Link from "next/link";

export default async function AccountLayout({ children }) {

    const getSession = async (cookie) => {
      const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
        headers: { cookie },
      })
      if (!response?.ok) {
        return null
      }
      const session = await response.json()
      return Object.keys(session).length > 0 ? session : null
    };

    const session = await getSession();
    if(!session){
      console.log('yuo ar not alowed');
    }

    const fetchBalance = async () => {
        const response = await fetch('http://localhost:8080/api/accounts/1', {
          cache: 'no-store',
        });
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
