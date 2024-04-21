'use client'
import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { Cube1, Cube2, Cube3, Cube4, Cube5, Cube6 } from "./TheCubes"

const projects = [
  {
    Cube: Cube1
  },
  {
    Cube: Cube2
  },
  {
    Cube: Cube3
  },
  {
    Cube: Cube4
  },
  {
    Cube: Cube5
  },
  {
   Cube: Cube6
  },
];



const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="white"
      p={8}
      alignItems="center"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color="black">
        Previous Projects
      </Heading>
      <Box>

        <Box
          display="grid"
          gap="20px"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          justifyItems={'space-around'}
          sx={{
            '@media (max-width: 768px)': {
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            },
          }}
        >
        {projects.map((project, index) => (
            <Card key={index}> 
              <project.Cube />
            </Card>
          ))}
        </Box>
        
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
