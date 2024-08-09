import profilePic from "../assets/images/pro-photo.jpg";
import Resume from "../components/UI/Resume";
//importing CHAKRA UI components
import {
  Container,
  Heading,
  Text,
  keyframes,
  Box,
  Avatar,
  SlideFade,
  VStack,
  Flex,
} from "@chakra-ui/react";
//import component TextAnimation from components folder
import TextAnimation from "../components/UI/TextAnimation";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

//renders the 'About Me ' section
export default function AboutPage() {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-3px" },
    { disconnectOnLeave: false },
    {}
  );
  const size = "300px";
  const color = "#2D3748";
  const pulseRing = keyframes`
  0%{transform:scale(0.001);}
  40%
  50%{
    opacity:0;
  }
  100%{
    opacity:0;
  }
`;
  return (
    <Container
      as="main"
      maxW="1050px"
      centerContent
      borderRadius="3xl"
      bgGradient={["linear(to-b, black, gray.900,gray.900)"]}
      p={{ base: 30, md: 0 }}
      pt={{ md: 50 }}
      h="container.2xl"
    >
      <Heading
        fontSize={"2xl"}
        fontFamily={"body"}
        fontWeight={500}
        mb={50}
        mt={{ base: "220px", md: "200px", lg: "100px" }}
        bgGradient="linear(to-r,yellow.400,orange.300)"
        bgClip={"text"}
      >
        About Me
      </Heading>
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        top={5}
        _before={{
          content: "''",
          position: "relative",
          display: "block",
          width: "150%",
          height: "150%",
          boxSizing: "border-box",
          marginLeft: "-25%",
          marginTop: "-25%",
          borderRadius: "50%",
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}
      >
        <Avatar
          src={profilePic}
          size="full"
          alt="Profile photo"
          position="absolute"
          top={0}
        />
      </Box>
      <TextAnimation />
      <SlideFade offsetY="300px" in={enterCount > 0}>
        <Flex
          ref={ref}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          w={{ base: "auto", md: "2xl", lg: "4xl" }}
          mt={2}
          pl={{ base: 8, lg: 20 }}
          pt={10}
          pb={{ base: 16, md: 10 }}
          pr={{ base: 8, lg: 20 }}
          align="center"
          bgColor={"gray.900"}
          borderBottomLeftRadius={80}
          borderBottomEndRadius={80}
          borderTopRightRadius={80}
          borderBottomStartRadius={80}
          pos="relative"
          _before={{
            content: '""',
            pos: "absolute",
            top: "-100px",
            left: 0,
            height: "100px",
            width: "100px",
            borderBottomLeftRadius: "50%",
            bgColor: "transparent",
            boxShadow: "0 40px 0 0 #171923",
          }}
        >
          <Text fontSize={"lg"} mt={3} color="#ccd6db" textAlign={"start"}>
            I love coding and I am passionate about learning new technologies. I
            appreciate well designed websites which makes me spend more time on
            them. My obsession with design details helps me to create websites
            that are appealing to the end users. I embed responsiveness in all
            of my work because I believe a user should be able to experience the
            application regardless of the device. I am equally interested in
            backend technologies and databases which are the backbone of every
            web application.
          </Text>
          <Text fontSize={"lg"} mt={22} color="#ccd6db" textAlign={"start"}>
            In my free time you can see me with my camera. I am a passionate
            photographer and very keen in portrait photography.
          </Text>
        </Flex>
      </SlideFade>
      {/*Skill set and Resume*/}

      <Box
        borderRadius="3xl"
        m={{ base: 2, md: 20, lg: 0 }}
        p={{ base: 0, lg: 16 }}
        mt={2}
      >
        <VStack
          spacing={{ base: 4, md: 20, lg: 20 }}
          borderRadius="3xl"
          bgGradient={{
            md: "linear(to-b, gray.900, gray.800,gray.800)",
            base: "black",
          }}
          mt={{ base: -40, sm: -40, md: -5, lg: -8 }}
          w={{ base: "auto", md: "2xl", lg: "4xl" }}
          pt={0}
          pb={10}
        >
          <Resume></Resume>
        </VStack>
      </Box>
    </Container>
  );
}
