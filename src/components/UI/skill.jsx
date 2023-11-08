//importing CHAKRA UI components
import { Box, Heading, Text } from "@chakra-ui/react";
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
          w={{ base: 250, sm: 250 }}
          borderTopLeftRadius={40}
          borderBottomRightRadius={40}
          bgGradient={[
            "linear(to-b, gray.900, gray.800,gray.700, gray.800, gray.900)",
          ]}
          color={"#ccd6db"}
          p={2}
          key={i}
          align="center"
        >
          <Text fontSize={15}>{skill}</Text>
        </Box>
      ))}
    </>
  );
}
