'use client';

import '../../styles/footer.css';
import React from 'react';
import { usePathname } from 'next/navigation';
import { TfiWallet } from 'react-icons/tfi';

const FooterWalletIcon = () => {
  const currentPath = usePathname();
  return (
    <div className={
        currentPath.startsWith('/wallet')
          ? 'footer--icons-placeholder footer-icon--active' : 'footer--icons-placeholder'
        }
    >
      <TfiWallet className={
            currentPath.startsWith('/wallet')
              ? 'footer-icon footer-icon--active' : 'footer-icon'
            }
      />
    </div>
  );
};

export default FooterWalletIcon;
