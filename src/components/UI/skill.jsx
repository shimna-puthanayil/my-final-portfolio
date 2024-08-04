//importing CHAKRA UI components
import {
  Box,
  Text,
  Image,
  HStack,
  GridItem,
  SlideFade,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
//this component will be used to render the skill section inside 'Resume ' section
export default function Skill({ skills }) {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "500px" },
    { disconnectOnLeave: false },
    {}
  );
  //iterates through each skill
  return (
    <>
      {skills.map((skill, i) => (
        <GridItem p={{ base: 0, md: 1 }} pb={{ base: 1, md: 1 }} key={i}>
          <Box
            ref={ref}
            role={"group"}
            p={5}
            height="auto"
            borderTopLeftRadius={40}
            borderBottomRightRadius={40}
            _groupHover={{
              before: {
                filter: "blur(100px)",
              },
            }}
            boxShadow={"2xl"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              pos={"relative"}
              w={{ base: 200, sm: 200 }}
              _after={{
                transition: "all .4s ease",
                content: '""',
                w: "97%",
                h: "75%",
                pos: "absolute",
                top: 2,
                left: 1,
                background: `url("images/wb.png") center/contain`,
                filter: "blur(10px)",
                zIndex: -1,
                borderTopLeftRadius: "40",
                borderBottomRightRadius: "40",
              }}
              _groupHover={{
                _after: {
                  pos: "absolute",
                  filter: "blur(500px)",
                },
              }}
            >
              <Box
                w={{ base: 200, sm: 200 }}
                borderTopLeftRadius={40}
                borderBottomRightRadius={40}
                bgGradient={[
                  "linear(to-b, gray.900, gray.800,gray.700, gray.800, gray.900)",
                ]}
                color={"#ccd6db"}
                p={5}
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
            </Box>
          </Box>
        </GridItem>
      ))}
    </>
  );
}
