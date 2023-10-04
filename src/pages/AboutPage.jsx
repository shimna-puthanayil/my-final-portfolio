// This is a static page mocking an "About Us" section for our fake user data
import profilePic from "../images/pro-photo.jpg";
import { Container, Heading, Image, Text } from "@chakra-ui/react";
export default function AboutPage() {
  return (
    <Container maxW="1100px" bg="black" centerContent>
      <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500} my={50}>
        About Me
      </Heading>

      <Image
        src={profilePic}
        class="img  img-round-frame my-3"
        alt="Profile photo"
      />
      <Text fontSize={"lg"} my={50}>
        I love coding and I aspire to become a good developer. I am passionate
        about learning new technologies. I am very happy that I am doing a
        course in coding that will empower me to achieve my goals. I love
        photography as a hobby. I believe this can help me to design websites
        that are more visually asthetic.
      </Text>
    </Container>
  );
}
