import Resume from "../components/UI/Resume";
//importing CHAKRA UI components
import {
  Container,
  Heading,
  Text,
  Box,
  Avatar,
  Image,
  SlideFade,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
//import component TextAnimation from components folder
import TextAnimation from "../components/UI/TextAnimation";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
let profilePic = import.meta.env.VITE_PROFILEPIC_PATH;

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
        top={{ md: 5 }}
        _before={{
          content: "''",
          position: "relative",
          display: "block",
          width: "120%",
          height: "140%",
          boxSizing: "border-box",
          marginLeft: "-10%",
          marginTop: "-20%",
          borderTopLeftRadius: "50%",
          borderTopEndRadius: "50%",
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}
      >
        <Image
          src={profilePic}
          size="full"
          alt="Profile photo"
          position="absolute"
          top={{ base: -25, md: -19 }}
          borderTopLeftRadius="50%"
          borderTopEndRadius="50%"
          border={"gray"}
        />
      </Box>
      <TextAnimation />
      <SlideFade offsetY="100px" initialScale={0.1} in={enterCount > 0}>
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
          bgGradient={[
            "linear(to-b, gray.900,blackAlpha.300,blackAlpha.300,gray.800)",
          ]}
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
            Hi, my name is Shimna Puthanayil and I’m an aspiring full stack
            developer based in Sydney, Australia with a keen interest in
            creating complete, user-friendly web applications. With a
            certificate in full stack development from the University of Sydney,
            I’m eager to apply my skills and start making a real impact.
          </Text>
          <Text fontSize={"lg"} mt={3} color="#ccd6db" textAlign={"start"}>
            I’ve gained hands-on experience in both front-end and back-end
            development. My approach focuses on building solutions that are not
            only visually appealing but also user-centric, efficient and
            responsive. I am equally interested in backend technologies and
            databases which are the backbone of every web application.
          </Text>
          <Text fontSize={"lg"} mt={22} color="#ccd6db" textAlign={"start"}>
            Although I’m just starting out, I’ve already worked on several group
            and individual projects, including this portfolio site, where I’ve
            applied my knowledge and developed my problem-solving skills. I’m
            passionate about continuous learning and always on the lookout for
            new challenges to expand my expertise.
          </Text>

          <Text fontSize={"lg"} mt={3} color="#ccd6db" textAlign={"start"}>
            Outside of coding, I’m a photographer, which helps fuel my
            creativity. Whether it’s through color schemes or innovative design
            elements, I strive to bring a unique perspective to every project.
            I’m enthusiastic about combining my love for technology with my
            creative side to build impactful digital solutions.
          </Text>
          <Text fontSize={"lg"} mt={3} color="#ccd6db" textAlign={"start"}>
            I’m currently looking for opportunities to collaborate on projects,
            gain hands-on experience and contribute to a team. Feel free to
            explore my portfolio and reach out if you’d like to connect or
            discuss potential opportunities!
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
