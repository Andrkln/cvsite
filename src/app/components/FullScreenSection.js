'use client'
import * as React from "react";
import { VStack } from "@chakra-ui/react";


const FullScreenSection = ({ children, flexGrow, ...boxProps }) => {

  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      flexGrow={flexGrow}
    >
      <VStack maxWidth="100vw" minHeight="100vh" 
      {...boxProps} 
      flexGrow={flexGrow}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
