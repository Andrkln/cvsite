import { Box, Heading } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Text } from '@chakra-ui/react'; 





const Qualities =

    {
        'Always Calm': 'I remain composed even in high-pressure situations, like being seconds from an accident.',
        'Consistent': 'I can maintain focus for long stretches, working 16-hour days if needed.',
        'Confident': 'I can comfortably converse with anyone, regardless of their social status or accomplishments.',
        'Serious Perception': 'People sometimes find me too serious because of my intense focus.',
        'Not Limited by Paradigms': 'I think outside the box, finding creative solutions beyond the obvious.',
        'Dedicated': 'Once I commit, I see projects through, no matter their scale.',
        
    };


const borderAnimation = keyframes`
    0% {
      border-width: 0; // No border initially
    }
    25% {
      border-top-width: 5px; // Add the top border
    }
    50% {
      border-top-width: 5px;
      border-left-width: 5px; // Add the left border
    }
    75% { 
      border-top-width: 5px;
      border-left-width: 5px;
      border-right-width: 5px; // Add the right border
    }
    100% {
      border-width: 5px; // Complete the border by adding the bottom
    }
  `;


const QualityBox = ({ HeadText, SmallText, BigColor, SmallColor }) => {
    return (
      <Box
      className="Quality"
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
        borderRadius={'100%'}
        borderColor={BigColor}
        borderWidth={5}
        w={290}
        h={290}
        sx={{
          animation: `${borderAnimation} 5s infinite ease-in-out`,
        }}
      >
        <Box
          bgColor={SmallColor}
          borderRadius={'100%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          w={'90%'}
          h={'90%'}
        >
          <Heading>
            {HeadText}
          </Heading>
          <br></br>
          <Text
        w={'80%'}
          >
            {SmallText}
          </Text>
        </Box>
      </Box>
    );
  };
  
  export default QualityBox;