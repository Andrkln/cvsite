import React from 'react';
import { Box, Text, HStack, VStack } from '@chakra-ui/react';
import TypingEffect from './TypeEffect.client';
import { keyframes } from "@emotion/react";
import Image from 'next/image';


const spin = keyframes`
  from {
    transform: rotateX(-30deg) rotateY(0deg);
  }
  to {
    transform: rotateX(-30deg) rotateY(360deg);
  }
`;

  


const Styles = ({ color, width, height, font, transform }) => ({
    position: 'absolute',
    width,
    height,
    background: color,
    border: '1px solid #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: font,
    transform,
  });

const CubeFace = ({ color, width, height, font, transform, text, TypeText, imageUrl, speed, textColour }) => (
    <Box sx={Styles({ color, width, height, font, transform,  })}
    >
      <VStack>
        {imageUrl && <Image src={imageUrl} alt="Cube Face"
           className='CubeImage'
           width="0"
           height="0"
           sizes="100vw"
           style={{ width: '50%', height: 'auto' }}
        />}
        {text && <Text>{text}</Text>}
        {TypeText && <Text sx={{
                            background: textColour,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text', 
                            }}>
                        {<TypingEffect text={` ${TypeText}`} speed={speed} />}
                    </Text>}
      </VStack>
    </Box>
  );
  


const Cube = ({ faces }) => (
    <HStack>
        <Box
            sx={{
                position: 'relative',
                width: '400px',
                height: '400px',
                transformStyle: 'preserve-3d',
                transform: 'rotateX(-30deg) rotateY(30deg)',
                animation: `${spin} 15s infinite linear`,
            }}
            >
            {faces.map((face, index) => (
                <CubeFace key={index} {...face} />
            ))}
        </Box>
    </HStack>
  );

export default Cube