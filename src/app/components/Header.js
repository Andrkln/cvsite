'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link'

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: andrew13338@gmail.com",
    colour: 'rgb(68, 141, 252)'
  },
  {
    icon: faGithub,
    url: "https://github.com",
    colour: 'rgb(4,170, 109)'
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    colour: '#0957ff'
  },
];

const Header = () => {
    
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`; 
    const element = document.getElementById(id); 
    if (element) { 
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
      }); 
    } 
  }; 

  return (
    <Box
      height="40px"
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="translateY(0)"
      transition="transform .3s ease-in-out"
      backgroundColor="#18181b"
      zIndex="10"
    >
      <Box color="white" maxWidth="1280px" m="0 auto" px={16} py={10}
        >
        <HStack justifyContent="space-between" 
        >
        <nav>
            <HStack spacing={8}>
              {socials.map((social) => (
               <Link key={social.url} href={social.url} 
               isExternal
                    sx={{
                      color: 'white',
                      '&:hover': {
                        color: social.colour,
                      },
                    }}>
                  <FontAwesomeIcon icon={social.icon} size="lg"/>
              </Link>
            ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={25}>
              <a 
                href="#projects" onClick={handleClick("projects")} className="section-links"> 
                  My Projects 
              </a> 
              <a 
                href="#contactme" onClick={handleClick("contactme")} className="section-links"> 
                  Contact Me 
             </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;