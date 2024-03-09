'use client';
import React from "react";
import { Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Self from "./self";


const imgSrc = "/images/my_photo.jpg";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="rgb(252, 223, 94)"
    flexGrow='2'
  >
      <Heading as='h1' size='4xl'>
            Web Developer
      </Heading>
      <Self 
        title='Andrey'
        description='I have experience in various range of fields: Python, Django, SQL, Chatbots and many others'
        imageSrc={imgSrc}
      />
  </FullScreenSection>
);

export default LandingSection;
