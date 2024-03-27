'use client';
import { useState, useEffect } from 'react';

const useismobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const match = window.matchMedia("(max-width: 900px)").matches;
      setIsMobile(match);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
};

export default useismobile;