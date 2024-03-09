'use client'
import { Heading, VStack, Box } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, children }) => {
  return (
    <Box
      p={6}
      sx={{
        display: "flex",
        position: "relative",
        zIndex: 0,
        borderRadius: "10px",
        overflow: "hidden",
        padding: "5rem",
        alignItems: "center",
        ':before': {
          content: '""', // Note: Empty strings for content must be double quoted
          position: "absolute",
          zIndex: -2,
          left: "-50%",
          top: "-50%",
          width: "200%",
          height: "200%",
          backgroundColor: "#377af5",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 50%",
          backgroundPosition: "0 0, 100% 0, 100% 100%, 0 100%",
          backgroundImage: "linear-gradient(#cedcf7, #1867fa), linear-gradient(#cedcf7, #1867fa), linear-gradient(rgb(158, 245, 44), #d8e3f8), linear-gradient(rgb(158, 245, 44), #d8e3f8)",
          animation: "rotate 4s linear infinite",
        },
        ':after': {
          content: '""', // Double quoted
          position: "absolute",
          zIndex: -1,
          left: "6px",
          top: "6px",
          width: "calc(100% - 12px)",
          height: "calc(100% - 12px)",
          background: "white",
          borderRadius: "5px",
        }
      }}
    >
      <VStack spacing={4}>
        <Heading fontSize="xl" fontWeight="bold" colour='black'>
          {title}
          {children}
        </Heading>
      </VStack>
    </Box>
  );
};

export default Card;
