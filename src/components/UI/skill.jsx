//importing CHAKRA UI components
import { Box, Text, Image, HStack, GridItem } from "@chakra-ui/react";
//this component will be used to render the skill section inside 'Resume ' section
export default function Skill({ skills, title }) {
  const headingColor = "rgb(217, 185, 121)";
  //iterates through each skill
  return (
    <>
      {skills.map((skill, i) => (
        <GridItem p={{ base: 0, md: 1 }} pb={{ base: 1, md: 1 }} key={i}>
          <Box
            w={{ base: 200, sm: 200 }}
            borderTopLeftRadius={40}
            borderBottomRightRadius={40}
            bgGradient={[
              "linear(to-b, gray.900, gray.800,gray.700, gray.800, gray.900)",
            ]}
            color={"#ccd6db"}
            p={7}
            align="center"
          >
            <HStack align={"center"}>
              <Image
                mt={{ base: 0, md: 0 }}
                mb={{ base: 3, md: 0 }}
                rounded={"lg"}
                height={{ base: 8, md: 8 }}
                width={{ base: "40px", md: "40px" }}
                objectFit={"contain"}
                src={skill.split(",")[1]}
              ></Image>
              <Text key={i} fontSize={14} fontWeight={"bold"}>
                {skill.split(",")[0]}
              </Text>
            </HStack>
          </Box>
        </GridItem>
      ))}
    </>
  );
}
