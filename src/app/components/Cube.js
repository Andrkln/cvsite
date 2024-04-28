import React, { useState, useRef } from 'react';
import { Box, Text, HStack, VStack } from '@chakra-ui/react';
import TypingEffect from "../hooks/TypeEffect.client";
import Image from 'next/image';
  


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
    <Box sx={Styles({ color, width, height, font, transform, })
  }
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
                        {<TypingEffect text={`${TypeText}`} speed={speed} />}
                    </Text>}
      </VStack>
    </Box>
  );
  


  const Cube = ({ faces }) => {
    const [rotation, setRotation] = useState({ rotateX: -30, rotateY: 30 });
    const isDragging = useRef(false);
    const startPos = useRef({ x: 0, y: 0 });
  
    const handleMouseDown = (e) => {
      isDragging.current = true;
      startPos.current = { x: e.clientX, y: e.clientY };
    };
  
    const handleMouseMove = (e) => {
      if (isDragging.current) {
        const deltaX = e.clientX - startPos.current.x;
        const deltaY = e.clientY - startPos.current.y;
  
        setRotation({
          rotateX: rotation.rotateX - deltaY / 150,
          rotateY: rotation.rotateY + deltaX / 150,
        });
      }
    };
  
    const handleMouseUp = () => {
      isDragging.current = false; 
    };
  
    return (
      <HStack
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Box
          sx={{
            position: 'relative',
            width: '280px',
            height: '280px',
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
            transition: 'transform 0.1s linear', // Smooth transition
          }}
          className="Cube"
        >
          {faces.map((face, index) => (
            <CubeFace key={index} {...face} />
          ))}
        </Box>
      </HStack>
    );
  };
  
  export default Cube;