'use client';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useRouter } from 'next/navigation';

const DashboardLink = ({ children, href }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    router.refresh();
  };

  return (
    <a className="dashboard--link" onClick={() => handleClick()}>
      {children}
    </a>
  );
};

export default DashboardLink;
