'use client';

import '../../styles/footer.css';
import React from 'react';
import { usePathname } from 'next/navigation';
import { IoPersonCircle } from 'react-icons/io5';

const FooterAccountIcon = () => {
  const currentPath = usePathname();
  return (
    <div className={
        currentPath.startsWith('/details')
          ? 'footer--icons-placeholder footer-icon--active' : 'footer--icons-placeholder'
        }
    >
      <IoPersonCircle className={
            currentPath.startsWith('/details')
              ? 'footer-icon footer-icon--active' : 'footer-icon'
            }
      />
    </div>
  );
};

export default FooterAccountIcon;
