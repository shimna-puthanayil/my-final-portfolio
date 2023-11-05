import profilePic from "../assets/images/pro-photo.jpg";
//importing CHAKRA UI components
import {
  Container,
  Heading,
  Text,
  keyframes,
  Box,
  Avatar,
  Center,
} from "@chakra-ui/react";
//import component TextAnimation from components folder
import TextAnimation from "../components/UI/TextAnimation";

//renders the 'About Me ' section
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
      <Text fontSize={"lg"} mt={22} color="#ccd6db" textAlign={"justify"}>
        I love coding and I am passionate about learning new technologies. I
        appreciate well designed websites which makes me spend more time on
        them. My obsession with design details helps me to create websites that
        are appealing to the end users. I embed responsiveness in all of my work
        because I believe a user should be able to experience the application
        regardless of the device. I am equally interested in backend
        technologies and databases which are the backbone of every web
        application.
      </Text>
      <Text
        fontSize={"lg"}
        mt={22}
        color="#ccd6db"
       
        textAlign={{ base: "justify", md: "justify" }}
      >
        I am confident of attempting development challenges using Node.js,
        Express.js, React.js, MongoDB and Mongoose ODM, Apollo GraphQL, MySQL
        and Sequelize ORM, Javascript, jQuery, CSS3, HTML5, Handlebars,
        Bootstrap, Chakra UI and git.
      </Text>
      <Text fontSize={"lg"} mt={22} color="#ccd6db" textAlign={"justify"}>
        If I'm not working you can see me with my camera. I am a passionate
        photographer and very keen in portrait photography.
      </Text>
    </Container>
  );
}
