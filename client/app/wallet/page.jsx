import React from "react";
import Image from "next/image";
import Link from "next/link";
import { unstable_getServerSession } from "next-auth";
import "../../styles/account.css";

const page = async () => {
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
  const walletPath = `/wallet/${data.accountId}`;
  return (
    <div className="balance--button-container">
      <Link href={`${walletPath}/transfer`}>
        <div>
          <Image
            src="/../public/tx-button.png"
            alt="Transaction Button"
            width={50}
            height={50}
          ></Image>
        </div>
      </Link>
      <Link href={`${walletPath}/deposit`}>
        <button className="btn btn--deposit">Deposit</button>
      </Link>
      <Link href={`${walletPath}/withdraw`}>
        <button className="btn btn--withdraw">Withdraw</button>
      </Link>
    </div>
  );
};

export default page;
