//importing the component Skill from components folder
import Skill from "./skill";
//importing CHAKRA UI components
import {
  Box,
  Heading,
  useColorModeValue,
  Link,
  Grid,
  Button,
  Image,
  keyframes,
} from "@chakra-ui/react";

import resumePath from "../../pages/assets/Shimna Puthanayil - Resume.pdf";

import skillsInfo from "../../utils/skillsInfo";
import { useState, useEffect } from "react";
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
export default function Resume() {
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
    <>
      <Link href={resumePath} download="Resume" color={fontColor} ml={2}>
        <Button
          mt={{ base: "200px", md: "0px" }}
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
      <Box
        // bgGradient={[
        //   "linear(to-b,blackAlpha.50, blackAlpha.400, gray.800,blackAlpha.400, gray.900)",
        // ]}
        bg={useColorModeValue("gray.900", "gray.700")}
        borderRadius="3xl"
        pb={{ base: 16, md: 7 }}
        pl={5}
        pr={5}
        color={useColorModeValue("gray.700", "whiteAlpha.900")}
        shadow="base"
        w={{ base: "auto", md: "600px", lg: "800px" }}
        mt={{ base: 5, md: -10 }}
        align="center"
      >
        <Heading
          fontSize={{ base: "xl", md: "2xl" }}
          fontFamily={"body"}
          fontWeight={500}
          bgGradient="linear(to-r,yellow.400,orange.300)"
          bgClip={"text"}
          mt={{ base: 6, md: 5 }}
          mb={{ base: -3, md: 0 }}
          alignContent={"Center"}
        >
          Skills
        </Heading>

        <Grid
          gap={4}
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
    </>
  );
}
