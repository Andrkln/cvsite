import React, { createContext, useContext } from "react";
import useIsMobile from "../hooks/isMobile";

const MobileContext = createContext({ isMobile: false });

export const MobileProvider = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => useContext(MobileContext);
