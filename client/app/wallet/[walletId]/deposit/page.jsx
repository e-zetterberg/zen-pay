import React from "react";
import Link from "next/link";
import Image from "next/image";
import InputAmount from "../../../../components/InputAmount";
import "../../../../styles/account.css";

const deposit = ({params}) => {
  const walletPath = `/wallet/${params.walletId}`;
  return (
    <>
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
        <button className="btn btn--active">Deposit</button>
      </Link>
      <Link href={`${walletPath}/withdraw`}>
        <button className="btn btn--inactive">Withdraw</button>
      </Link>
    </div>
    <InputAmount walletId={params.walletId} type={"deposit"} />
    </>

  );
};

export default deposit;
