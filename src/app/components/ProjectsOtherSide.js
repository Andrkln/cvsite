'use client'
import React from "react";
import { Box, Heading  } from "@chakra-ui/react";
import QualityBox from "./QualityCard";

const Qualities =

    {
        'Always Calm': 'I remain composed even in high-pressure situations, like being seconds from an accident.',
        'Consistent': 'I can maintain focus for long stretches, working 16-hour days if needed.',
        'Confident': 'I can comfortably converse with anyone, regardless of their social status or accomplishments.',
        'Serious': 'People sometimes find me too serious because of my intense focus.',
        'No Paradigms': 'I think outside the box, finding creative solutions beyond the obvious.',
        'Dedicated': 'Once I commit, I see projects through, no matter their scale.',
        
    };


const ProjectsOtherSide = () => {
  return (
    <Box
      className="QualityBox"
      transform="rotateX(0deg) rotateY(180deg) !important"
      display="grid"
      rowGap={10}
      columnGap={300}
      gridTemplateColumns={["repeat(1, minmax(0, 1fr))", "repeat(3, minmax(0, 1fr))"]}
      w={'50vw'}
      ml={40}
    >
      {Object.keys(Qualities).map((key, index) => (
        <QualityBox
          key={index} 
          HeadText={key} 
          SmallText={Qualities[key]} 
          BigColor="gray" 
          SmallColor="rgb(252, 223, 94)"
        />
      ))}
    </Box>
  );
};

export default ProjectsOtherSide;