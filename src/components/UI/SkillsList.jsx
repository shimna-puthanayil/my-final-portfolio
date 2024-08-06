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
  Button,
  keyframes,
  Image,
} from "@chakra-ui/react";
const animation = keyframes`
  10%, 90% {
     transform: translate3d(-1px, 0, 0);
   }
   
   20%, 80% {
     transform: translate3d(2px, 0, 0);
   }
 
   30%, 50%, 70% {
     transform: translate3d(-4px, 0, 0);
   }
 
   40%, 60% {
     transform: translate3d(4px, 0, 0);
   }
 
   
 `;
// import resumePath from "./assets/Shimna Puthanayil - Resume.pdf";
import resumePath from "../../pages/assets/Shimna Puthanayil - Resume.pdf";
import skillsInfo from "../../utils/skillsInfo";
import { useState, useEffect } from "react";
import React from "react";

// This function renders the section for Resume
export default function SkillsList() {
  const fontColor = "#ccd6db";
  const shaking = `${animation} infinite 1s`;
  const [isHovering, setIsHovering] = useState(false);

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
        <Link href={resumePath} download="Resume" color={fontColor} ml={2}>
          <Button
            mt={{ base: "200px", md: "50px" }}
            colorScheme="black"
            borderRadius={"full"}
            border={"1px"}
            borderColor={"orange.300"}
            _hover={{
              animation: shaking,
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Image
              mt={{ base: 0, md: 0 }}
              mb={{ base: 0, md: 0 }}
              mr={2}
              rounded={"lg"}
              height={{ base: 9, md: 9 }}
              width={{ base: "20px", md: "20px" }}
              objectFit={"contain"}
              src={"images/down.png"}
              _hover={{ src: "images/dw.png" }}
            ></Image>
            {isHovering ? "Download Resume" : "Resume"}
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
