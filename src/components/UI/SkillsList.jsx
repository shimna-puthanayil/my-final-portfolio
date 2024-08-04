//importing the component Skill from components folder
import Skill from "../UI/skill";
//importing CHAKRA UI components
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  VStack,
  Link,
  Grid,
  SlideFade,
} from "@chakra-ui/react";

// import resumePath from "./assets/Shimna Puthanayil - Resume.pdf";
import resumePath from "../../pages/assets/Shimna Puthanayil - Resume.pdf";
import skillsInfo from "../../utils/skillsInfo";
import { useState, useEffect } from "react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
// This function renders the section for Resume
export default function SkillsList() {
  const fontColor = "#ccd6db";
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-10px" },
    { disconnectOnLeave: false },
    {}
  );
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
        m={{ base: "auto", md: 20, lg: 0 }}
        p={{ base: "auto", lg: 0 }}
        align="center"
      >
        <VStack
          spacing={{ base: 4, md: 20, lg: 20 }}
          borderRadius="3xl"
          bgGradient={{
            md: "linear(to-b, gray.900, gray.800,gray.800)",
            base: "black",
          }}
          mt={{ base: 0, md: 120, lg: 50 }}
          w={{ base: "auto", md: "2xl", lg: "4xl" }}
          pt={10}
          pb={12}
        >
          <Box
            bg={useColorModeValue("gray.900", "gray.700")}
            borderRadius="3xl"
            pb={8}
            px={8}
            color={useColorModeValue("gray.700", "whiteAlpha.900")}
            shadow="base"
            w={{ base: "auto", md: "600px", lg: "800px" }}
            mt={{ base: 0, md: -250, lg: -16 }}
            align="center"
          >
            <Heading
              fontSize={{ base: "xl", md: "xl" }}
              fontFamily={"body"}
              fontWeight={500}
              bgGradient="linear(to-r,yellow.400,orange.300)"
              bgClip={"text"}
              mt={{ base: 6, md: 10, lg: 1 }}
              mb={{ base: -3, md: 1 }}
              alignContent={"Center"}
            >
              Skills
            </Heading>
            <SlideFade offsetY="100px" in={enterCount > 0}>
              <Grid
                ref={ref}
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
            </SlideFade>
          </Box>
        </VStack>
        <Heading
          fontSize={{ base: "md", md: "xl" }}
          fontFamily={"body"}
          fontWeight={400}
          color={fontColor}
          mt={{ base: "-50px", md: "50px" }}
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
      </Box>
    </Flex>
  );
}
