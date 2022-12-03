'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineSync } from 'react-icons/ai';
import '../../styles/RefreshButton.css';

const RefreshButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.refresh();
  };

  return (
    <button className="btn" type="button" onClick={() => handleClick()}>
      <AiOutlineSync color="inherit" fontSize={24} />
    </button>
  );
};

export default RefreshButton;
