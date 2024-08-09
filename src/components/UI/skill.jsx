//importing CHAKRA UI components
import {
  Box,
  Text,
  Image,
  HStack,
  GridItem,
  SlideFade,
  Flex,
  Center,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { isMobile } from "react-device-detect";

//this component will be used to render the skill section inside 'Resume ' section
export default function Skill({ skills }) {
  const ref = useRef(null);

  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "1600px" },
    { disconnectOnLeave: false },
    {}
  );
  let offset;
  if (isMobile) {
    offset = 100;
  } else {
    offset = 1100;
  }
  //iterates through each skill

  return (
    <>
      {skills.map((skill, i) => (
        <SlideFade
          offsetY={offset}
          initialScale={0.1}
          in={enterCount > 0}
          whileHover={{ scale: 1.1 }}
        >
          <GridItem p={{ base: 5, md: 5 }} pb={{ base: 5, md: 10 }}>
            <Box
              ref={ref}
              role={"group"}
              height="50px"
              borderTopLeftRadius={40}
              borderBottomRightRadius={40}
              _groupHover={{
                before: {
                  filter: "blur(100px)",
                },
              }}
              boxShadow={"sm"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                pos={"relative"}
                w={{ base: 250, sm: 200 }}
                _after={{
                  transition: "all .4s ease",
                  content: '""',
                  w: { base: "90%", md: "97%" },
                  h: { base: "80%", md: "80%" },

                  pos: "absolute",
                  top: 2,
                  left: { base: 3, md: 1 },
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
                <Flex
                  w={{ base: 220, sm: 200 }}
                  h={{ base: 20, md: 70 }}
                  borderTopLeftRadius={40}
                  borderBottomRightRadius={40}
                  bgGradient={[
                    "linear(to-b, gray.900, gray.800,gray.700, gray.800, gray.900)",
                  ]}
                  color={"#ccd6db"}
                  p={6}
                  pl={10}
                  justifyContent={"flex-start"}
                >
                  <HStack align={"center"}>
                    <Image
                      mt={{ base: 0, md: 0 }}
                      mb={{ base: 3, md: 0 }}
                      rounded={"lg"}
                      height={{ base: 6, md: 8 }}
                      width={{ base: "30px", md: "30px" }}
                      objectFit={"contain"}
                      src={skill.split(",")[1]}
                    ></Image>
                    <Text key={i} fontSize={14} fontWeight={"bold"}>
                      {skill.split(",")[0]}
                    </Text>
                  </HStack>
                </Flex>
              </Box>
            </Box>
          </GridItem>
        </SlideFade>
      ))}
    </>
  );
}
