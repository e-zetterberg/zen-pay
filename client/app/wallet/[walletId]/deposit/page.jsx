import React from "react";
import InputAmount from "../../../../components/InputAmount";
import "../../../../styles/account.css";

const deposit = ({params}) => {
  return <InputAmount walletId={params.walletId} type={"deposit"} />;
};

export default deposit;
