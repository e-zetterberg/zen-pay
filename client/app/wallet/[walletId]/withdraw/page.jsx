import React from "react";
import InputAmount from "../../../../components/InputAmount";
import "../../../../styles/account.css";

const page = ({params}) => {
  return <InputAmount walletId={params.walletId} type={"withdraw"} />;
};

export default page;
