import profilePic from "../assets/images/pro-photo.jpg";
import {
  Container,
  Heading,
  Text,
  keyframes,
  Box,
  Avatar,
} from "@chakra-ui/react";
import TextAnimation from "../components/UI/TextAnimation";

export default function AboutPage() {
  const fontColor = "rgb(217, 185, 121)";
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
      bgGradient={["linear(to-b, gray.900, gray.700)"]}
      p={{ base: 30, md: 50 }}
      h="container.2xl"
    >
      <Heading
        fontSize={"2xl"}
        fontFamily={"body"}
        fontWeight={500}
        mb={50}
        mt={{ base: "220px", md: "100px" }}
        color={fontColor}
      >
        About Me
      </Heading>
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
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
      <Text fontSize={"lg"} mt={22} color="#ccd6db">
        I love coding and I aspire to become a web developer. I am passionate
        about learning new technologies. I am very happy that I am doing a
        course in coding that will empower me to achieve my goals. I love
        photography as a hobby. I believe this can help me to design websites
        that are more visually asthetic.
      </Text>
    </Container>
  );
}
