//importing CHAKRA UI components
import { Box, Container, keyframes, HStack, VStack } from "@chakra-ui/react";
//import motion for animation
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
0%,40%,100%{
  transform:translateY(0);
}
20%{
  transform:translateY(-20px);
}
`;
const fontColor = "rgb(217, 185, 121)";
const commonStyles = {
  fontSize: "2xl",
  fontFamily: "body",
  fontWeight: 500,
  height: "12",
  display: "flex",
};
//this component TextAnimation is rendered in 'About Me ' section
export default function TextAnimation() {
  return (
    <Container
      w="100"
      pt="10"
      mt={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack>
        <Box as={motion.div} color="#b6c4cb" sx={commonStyles}>
          I'm An Aspiring
        </Box>
        <HStack>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 2s ease-in-out infinite`}
            pl="2"
            color={fontColor}
            sx={commonStyles}
          >
            W
          </Box>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 3s ease-in-out infinite`}
            color={fontColor}
            sx={commonStyles}
          >
            e
          </Box>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 4s ease-in-out infinite`}
            color={fontColor}
            sx={commonStyles}
          >
            b
          </Box>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 2s ease-in-out infinite`}
            pl="2"
            color={fontColor}
            sx={commonStyles}
          >
            D
          </Box>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 3s ease-in-out infinite`}
            color={fontColor}
            sx={commonStyles}
          >
            e
          </Box>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 4s ease-in-out infinite`}
            color={fontColor}
            sx={commonStyles}
          >
            v
          </Box>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 2s ease-in-out infinite`}
            color={fontColor}
            sx={commonStyles}
          >
            e
          </Box>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 3s ease-in-out infinite`}
            color={fontColor}
            sx={commonStyles}
          >
            l
          </Box>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 4s ease-in-out infinite`}
            color={fontColor}
            sx={commonStyles}
          >
            o
          </Box>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 2s ease-in-out infinite`}
            color={fontColor}
            sx={commonStyles}
          >
            p
          </Box>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 3s ease-in-out infinite`}
            color={fontColor}
            sx={commonStyles}
          >
            e
          </Box>
          <Box
            as={motion.div}
            animation={`${animationKeyframes} 4s ease-in-out infinite`}
            color={fontColor}
            sx={commonStyles}
          >
            r
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
}
