'use client'
import { Heading, VStack, Box } from "@chakra-ui/react";
import React from "react";



const Card = ({ title, children }) => {
  return (
    <Box
      className="flipBox"
      minWidth={20}
      sx={{
        height: '500px',
        display: "flex",
        position: "relative",
        zIndex: 0,
        borderRadius: "10px",
        overflow: "hidden",
        padding: "5rem",
        alignItems: "",
        ':before': {
          content: '""', 
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
          content: '""', 
          position: "absolute",
          zIndex: -1,
          left: "6px",
          top: "6px",
          width: "calc(100% - 10px)",
          height: "calc(100% - 10px)",
          background: "white",
          borderRadius: "5px",
        }
      }}
    >
      <VStack>
        <Heading fontSize="xl" fontWeight="bold" colour='black'
        >
          {title}
          {children}
        </Heading>
      </VStack>
    </Box>
  );
};

export default Card;
