//importing CHAKRA UI components
import { Box, Heading } from "@chakra-ui/react";
//this component will be used to render the skill section inside 'Resume ' section
export default function Skill({ skills, title }) {
  const headingColor = "rgb(217, 185, 121)";
  //iterates through each skill
  return (
    <>
      <Heading
        fontSize={{ base: "xl", md: "xl" }}
        fontFamily={"body"}
        fontWeight={500}
        color={headingColor}
        mt={{ base: 1, md: 1 }}
        mb={2}
      >
        {title}
      </Heading>

      {skills.map((skill, i) => (
        <Box
          w={300}
          borderTopLeftRadius={40}
          borderBottomRightRadius={40}
          bgGradient={["linear(to-b, gray.600, gray.800)"]}
          color={"#ccd6db"}
          p={2}
          key={i}
          align="center"
        >
          {skill}
        </Box>
      ))}
    </>
  );
}
