import React from "react";
import InputAmount from "../../../../components/InputAmount";
import Image from "next/image";
import Link from "next/link";
import "../../../../styles/account.css";

const page = ({params}) => {
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
        <button className="btn btn--inactive">Deposit</button>
      </Link>
      <Link href={`${walletPath}/withdraw`}>
        <button className="btn btn--active">Withdraw</button>
      </Link>
    </div>
    <InputAmount walletId={params.walletId} type={"withdraw"} />
    </>
  );
};

export default page;
