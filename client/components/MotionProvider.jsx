'use client';

import { motion } from 'framer-motion';

import React from 'react';

const MotionProvider = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
  >
    {children}
  </motion.div>
);

export default MotionProvider;
