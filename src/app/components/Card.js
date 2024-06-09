'use client';
import { Heading, VStack, Box } from "@chakra-ui/react";
import React from "react";

const Card = ({ children }) => {
  return (
    <Box
    display={'flex'}
    >   
      <VStack spacing={4}>
        <Heading fontSize={['md', 'lg', 'xl']} fontWeight="bold" color='black'>
        </Heading>
        <Box
        display={'flex'}
        justifyItems={'flex-end'}
        w={['30ch', '25vw']}
        h={['50ch', '25vw']}
              sx={{
                justifyContent: 'space-around',
                position: "relative",
                zIndex: 0,
                borderRadius: "10px",
                overflow: "hidden",
                padding: ['2rem', '3rem', '5rem'],
                ':before': {
                  content: '""',
                  position: "absolute",
                  zIndex: -2,
                  left: "-50%",
                  top: "-50%",
                  width: "200%",
                  height: "200%",
                  background: "linear-gradient(45deg, #cedcf7, #1867fa, rgb(252, 223, 94), #d8e3f8)",
                  backgroundSize: "200% 200%",
                },
                ':hover:before': {
                  animationPlayState: "running",
                  animation: "rotate 2.5s linear infinite",
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
          {children}
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
