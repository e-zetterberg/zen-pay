import React from "react";
import SendForm from "../../../../components/SendForm";

const Send = ({params}) => {
  return <SendForm walletId={params.walletId} type='transfer'/>;
};

export default Send;
