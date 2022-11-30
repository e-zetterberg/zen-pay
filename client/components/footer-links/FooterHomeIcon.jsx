'use client';

import '../../styles/footer.css';
import React from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';

const FooterHomeIcon = () => {
  const currentPath = usePathname();
  return (
    <div className={
        currentPath.startsWith('/dashboard') || currentPath === '/'
          ? 'footer--icons-placeholder footer-icon--active' : 'footer--icons-placeholder'
        }
    >

      <AiOutlineHome
        className={
                currentPath.startsWith('/dashboard') || currentPath === '/'
                  ? 'footer-icon footer-icon--active' : 'footer-icon'
            }
      />
    </div>

  );
};

export default FooterHomeIcon;
