'use client';
import { Box, Flex } from "@chakra-ui/react";



const Footer = () => {
  return (
    <Box 
      backgroundColor="#18181b"
    > <footer>
      <Flex
      margin="0 auto"
      px={12}
      color="white"
      justifyContent="center"
      alignItems="center"
      maxWidth="1024px"
      height="64px"
        >
            Andrey | © 2024

      </Flex>
    </footer>
    </Box>
  );
};

export default Footer;
