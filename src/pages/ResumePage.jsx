//importing the component Skill from components folder
import Skill from "../components/UI/Skill";
//importing CHAKRA UI components
import {
  Box,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  VStack,
  Link,
} from "@chakra-ui/react";

import resumePath from "./assets/Resume.pdf";
import skillsInfo from "../utils/skillsInfo";
import { useState, useEffect } from "react";

// This function renders the section for Resume
export default function ResumePage() {
  const headingColor = "rgb(217, 185, 121)";
  const fontColor = "#ccd6db";

  const [frontEndskills, setFrontEndSkills] = useState([]);
  const [backEndskills, setBackEndSkills] = useState([]);
  const getFrontEndSkills = () => {
    const frontEndskills = skillsInfo.getFrontEndSkills();
    setFrontEndSkills(frontEndskills);
  };

  const getBackEndSkills = () => {
    const backEndskills = skillsInfo.getBackEndSkills();
    setBackEndSkills(backEndskills);
  };

  // When the component mounts to the VDOM, run this callback to retrieve  all front end skills
  useEffect(() => {
    getFrontEndSkills();
  }, []);

  // When the component mounts to the VDOM, run this callback to retrieve  all back end skills
  useEffect(() => {
    getBackEndSkills();
  }, []);
  return (
    <Flex align="center" justify="center" id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <VStack
          spacing={{ base: 4, md: 20, lg: 20 }}
          borderRadius="lg"
          bgGradient={{
            md: "linear(to-b, gray.900, gray.700)",
            base: "black",
          }}
          mt={90}
          w={{ base: "auto", md: "2xl", lg: "4xl" }}
          pt={50}
          pb={20}
        >
          <Heading
            fontSize={{ base: "md", md: "xl" }}
            fontFamily={"body"}
            fontWeight={500}
            color={fontColor}
            mt={{ base: "70px", md: "0px" }}
          >
            Download My
            <Link
              href={resumePath}
              download="Resume"
              color={headingColor}
              ml={2}
            >
              Resume
            </Link>
          </Heading>

          <Box
            bg={useColorModeValue("gray.900", "gray.700")}
            borderRadius="3xl"
            p={8}
            color={useColorModeValue("gray.700", "whiteAlpha.900")}
            shadow="base"
            w={{ base: "auto", md: "600px", lg: "750px" }}
            mt={{ base: 5, md: -10 }}
          >
            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <VStack spacing={3} align="center" w={300}>
                <Skill skills={frontEndskills} title=" Frontend Skills" />
              </VStack>
              <VStack spacing={3} align="center" w={300}>
                <Skill skills={backEndskills} title=" Backend Skills" />
              </VStack>
            </Stack>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}
