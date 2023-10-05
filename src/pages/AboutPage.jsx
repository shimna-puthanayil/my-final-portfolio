import profilePic from "../images/pro-photo.jpg";
import {
  Container,
  Heading,
  Text,
  keyframes,
  Box,
  Avatar,
} from "@chakra-ui/react";
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
      maxW="1100px"
      centerContent
      className="corner"
      bgGradient={[
        "linear(to-tr, gray.200, gray.500)",
        "linear(to-t, gray.200, black.500)",
        "linear(to-b, gray.900, gray.700)",
      ]}
      p={50}
    >
      <Heading
        fontSize={"2xl"}
        fontFamily={"body"}
        fontWeight={500}
        my={50}
        mt={2}
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
      <Text fontSize={"lg"} mt={50} color={fontColor}>
        I love coding and I aspire to become a good developer. I am passionate
        about learning new technologies. I am very happy that I am doing a
        course in coding that will empower me to achieve my goals. I love
        photography as a hobby. I believe this can help me to design websites
        that are more visually asthetic.
      </Text>

      <span class="border_btm"></span>
    </Container>
  );
}
