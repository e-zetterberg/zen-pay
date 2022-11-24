import React from "react";
import Link from "next/link";
import Image from "next/image";
import SendForm from "../../../../components/SendForm";
import "../../../../styles/account.css";

const Send = ({params}) => {
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
        <button className="btn btn--deposit">Deposit</button>
      </Link>
      <Link href={`${walletPath}/withdraw`}>
        <button className="btn btn--withdraw">Withdraw</button>
      </Link>
    </div>
  <SendForm walletId={params.walletId} type='transfer'/>
  </>
  
  );
};

export default Send;
