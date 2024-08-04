import profilePic from "../assets/images/pro-photo.jpg";
import SkillsList from "../components/UI/SkillsList";
//importing CHAKRA UI components
import {
  Container,
  Heading,
  Text,
  keyframes,
  Box,
  Avatar,
  ScaleFade,
  SlideFade,
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
      maxW="1100px"
      centerContent
      borderBottomLeftRadius={80}
      borderBottomRightRadius={80}
      bgGradient={["linear(to-b, black, gray.900,gray.900)"]}
      p={{ base: 30, md: 50 }}
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
      <SlideFade offsetY="100px" in={enterCount > 0}>
        <Box
          ref={ref}
          borderRadius="lg"
          m={{ base: "auto", md: 10, lg: 0 }}
          p={{ base: "auto", lg: 10 }}
          align="center"
          w={{ base: "auto", md: "2xl", lg: "4xl" }}
        >
          <Text fontSize={"lg"} mt={22} color="#ccd6db" textAlign={"start"}>
            I love coding and I am passionate about learning new technologies. I
            appreciate well designed websites which makes me spend more time on
            them. My obsession with design details helps me to create websites
            that are appealing to the end users. I embed responsiveness in all
            of my work because I believe a user should be able to experience the
            application regardless of the device. I am equally interested in
            backend technologies and databases which are the backbone of every
            web application.
          </Text>
          {/* <Text
        fontSize={"lg"}
        mt={22}
        color="#ccd6db"
        textAlign={{ base: "justify", md: "justify" }}
      >
        I am confident of attempting development challenges using Node.js,
        Express.js, React.js, MongoDB and Mongoose ODM, Apollo GraphQL, MySQL
        and Sequelize ORM, Javascript, jQuery, CSS3, HTML5, Handlebars,
        Bootstrap, Chakra UI and git.
      </Text> */}

          <Text fontSize={"lg"} mt={22} color="#ccd6db" textAlign={"start"}>
            In my free time you can see me with my camera. I am a passionate
            photographer and very keen in portrait photography.
          </Text>
        </Box>
      </SlideFade>
      {/*Skill set */}
      <SkillsList></SkillsList>
    </Container>
  );
}
