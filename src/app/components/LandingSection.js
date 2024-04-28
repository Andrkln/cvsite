'use client';
import React from "react";
import { Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Self from "./self";
import useismobile from "../hooks/isMobile";



const imgSrc = "/images/my_photo.jpg";

const LandingSection = () => {
  const isMobile = useismobile(); // Corrected hook call placement

  const center = isMobile ? 'none' : 'center';
  const go_bottom = isMobile ? 100 : 0;
  
  return (
    <FullScreenSection
      justifyContent={center}
      alignItems="center"
      backgroundColor="rgb(252, 223, 94)"
      flexGrow={2} // Changed to a number
    >
      <Heading as='h1' size='4xl'
      mt={go_bottom}
      >
        Web Developer
      </Heading>
      <br/>
      <Self
        title='Andrey'
        description='I have experience in various range of fields: Python, Django, SQL, Chatbots and many others'
        imageSrc={imgSrc}
      />
    </FullScreenSection>
  );
};

export default LandingSection;
