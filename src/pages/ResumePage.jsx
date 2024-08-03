//importing the component Skill from components folder
import Skill from "../components/UI/skill";
//importing CHAKRA UI components
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  VStack,
  Link,
  Grid,
} from "@chakra-ui/react";

import resumePath from "./assets/Shimna Puthanayil - Resume.pdf";

import skillsInfo from "../utils/skillsInfo";
import { useState, useEffect } from "react";

// This function renders the section for Resume
export default function ResumePage() {
  const headingColor = "rgb(217, 185, 121)";
  const fontColor = "#ccd6db";

  const [skills, setSkills] = useState([]);
  const getSkills = () => {
    const skills = skillsInfo.getSkills();
    setSkills(skills);
  };

  // When the component mounts to the VDOM, run this callback to retrieve  all front end skills and all back end skills
  useEffect(() => {
    getSkills();
  }, []);

  return (
    <Flex align="center" justify="center">
      <Box
        borderRadius="lg"
        m={{ base: "auto", md: 20, lg: 10 }}
        p={{ base: "auto", lg: 16 }}
      >
        <VStack
          spacing={{ base: 4, md: 20, lg: 20 }}
          borderRadius="3xl"
          bgGradient={{
            md: "linear(to-b, gray.900, gray.800,gray.700)",
            base: "black",
          }}
          mt={{ base: 4, md: 120, lg: 50 }}
          w={{ base: "auto", md: "2xl", lg: "4xl" }}
          pt={10}
          pb={20}
        >
          <Heading
            fontSize={{ base: "md", md: "xl" }}
            fontFamily={"body"}
            fontWeight={500}
            color={fontColor}
            mt={{ base: "100px", md: "0px" }}
          >
            Download My
            <Link
              href={resumePath}
              download="Resume"
              bgGradient="linear(to-r,yellow.400,orange.300)"
              bgClip={"text"}
              ml={2}
            >
              Resume
            </Link>
          </Heading>

          <Box
            bg={useColorModeValue("gray.900", "gray.700")}
            borderRadius="3xl"
            pb={8}
            pl={8}
            pr={8}
            color={useColorModeValue("gray.700", "whiteAlpha.900")}
            shadow="base"
            w={{ base: "auto", md: "600px", lg: "800px" }}
            mt={{ base: 5, md: -10 }}
            align="center"
          >
            <Heading
              fontSize={{ base: "xl", md: "xl" }}
              fontFamily={"body"}
              fontWeight={500}
              bgGradient="linear(to-r,yellow.400,orange.300)"
              bgClip={"text"}
              mt={{ base: 1, md: 1 }}
              mb={2}
              alignContent={"Center"}
            >
              Skills
            </Heading>

            <Grid
              gap={1}
              templateRows={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              pt={6}
            >
              {/* skills */}
              <Skill skills={skills} />
            </Grid>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}
