//importing CHAKRA UI components
import { Box, Flex, VStack } from "@chakra-ui/react";
//importing the component Resume from components folder
import Resume from "../components/UI/Resume";

// This function renders the section for Resume
export default function ResumePage() {
  return (
    <Flex align="center" justify="center">
      <Box
        borderRadius="3xl"
        m={{ base: "auto", md: 20, lg: 10 }}
        p={{ base: "auto", lg: 16 }}
      >
        <VStack
          spacing={{ base: 4, md: 20, lg: 20 }}
          borderRadius="3xl"
          bgGradient={{
            md: "linear(to-b, gray.900, gray.800,gray.800)",
            base: "black",
          }}
          mt={{ base: 4, md: 150, lg: 55 }}
          w={{ base: "auto", md: "2xl", lg: "4xl" }}
          pt={10}
          pb={12}
        >
          <Resume></Resume>
        </VStack>
      </Box>
    </Flex>
  );
}
