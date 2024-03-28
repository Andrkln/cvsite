
'use client'
import { Box, Text, VStack  } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import React from 'react';
import TypingEffect from "../hooks/TypeEffect.client";
import Image from 'next/image';




const cornerAnimation = keyframes`
    0% {
        border-top-left-radius: 1% 50%;
    }
    12.5% {
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
    }
    25% {
        border-top-right-radius: 1% 50%;
    }
    25.001% {
        border-top-right-radius: 50% 1%;
    }
    37.5% {
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
    }
    50% {
        border-bottom-right-radius: 50% 1%;
    }
    50.001% {
        border-bottom-right-radius: 1% 50%;
    }
    62.5% {
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
    }
    75% {
        border-bottom-left-radius: 1% 50%;
    }
    75.001% {
        border-bottom-left-radius: 50% 1%;
    }
    87.5% {
        border-bottom-left-radius: 50%;
        border-top-left-radius: 50%;
    }
    100% {
        border-top-left-radius: 50% 1%;
    }
`;

const changeAnimation = keyframes`
    0%, 2.44% {
        width: 101%;
    }

    2.45%, 100% {
        width: 100%;
    }
`

const selfCss = css`
    .foo0 {
        animation: ${changeAnimation} 61.5s infinite linear 60s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    .foo1 {
        content:'';
        position: static;
        width: 32ch;
        height:  32ch;
        z-index: 2;
        background-color:lightseagreen;
        animation: ${cornerAnimation} 3.1s;
        border-radius: 50%;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 5px 5px 5px 5px white;
    }

    .foo2 {
        content:'';
        position: static;
        z-index: 2;
        background-color:blue;
        animation: ${cornerAnimation} 3.2s;
        border-radius: 50%;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .foo3 {
        content:'';
        position: static;
        z-index: 2;
        background-color:red;
        animation: ${cornerAnimation} 3.3s;
        border-radius: 50%;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`;
    
const AnimatedBox = styled(Box)`
  ${selfCss}
`;




const Self = ({ title, description, imageSrc }) => {
    const divf = 
    <Box className='foo1' id="foo1"
    w={10}
    h={10}
    >
        <Box className='foo2' id="foo2"
        w={'90%'}
        h={'90%'}
        >
            <Box className='foo3' id="foo3"
                w={'90%'}
                h={'90%'}
            >
                <Image  
                    src={imageSrc} 
                    alt={title}
                    width={210}
                    height={210}
                    className='imageClass'                    
                />
            </Box>
        </Box>
    </Box>
    return (
    <VStack spacing={4} className="me-slot">
        <AnimatedBox
        ><div className='foo0'>
            {divf}  
        </div>
        </AnimatedBox>
          <VStack spacing={3}
          w={80}
          >
                <Text fontSize="2.8vh" fontWeight="bold">
                    {title}
                </Text>
                <Text fontSize="2vh" fontWeight="bold"
                h={20}
               sx={{
                        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,14,215,1) 35%, rgba(0,212,255,1) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text', 
                    }}
                >       Shortly about Me:
                    <TypingEffect text={` ${description}`} speed={90} />
                </Text>
          </VStack>
      </VStack>
    );
  };


  export default Self;