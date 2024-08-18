//importing CHAKRA UI components
import {
  Box,
  Center,
  Stack,
  Heading,
  Text,
  Image,
  Link,
  VStack,
  Divider,
  Flex,
  IconButton,
  Wrap,
  WrapItem,
  ScaleFade,
  SlideFade,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  HStack,
} from "@chakra-ui/react";

//import icon
import { FaGithub } from "react-icons/fa6";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
//render details about individual projects
export default function Project({
  project: {
    name,
    url,
    deploymentLink,
    description,
    gitHubLink,
    technologies,
    loginDetails,
  },
}) {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-3px" },
    { disconnectOnLeave: false },
    {}
  );
  const initialFocusRef = React.useRef();
  const fontColor = "#ccd6db";
  return (
    <>
      <Center pt={10}>
        <SlideFade offsetY="100px" initialScale={0.1} in={enterCount > 0}>
          <Box
            ref={ref}
            role={"group"}
            p={6}
            maxW={"500px"}
            height={{ md: "765px", lg: "auto" }}
            w={"full"}
            bgGradient={["linear(to-b, gray.900, gray.700)"]}
            _groupHover={{
              before: {
                filter: "blur(100px)",
              },
            }}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={0}
          >
            <Stack pt={1} align={"center"}>
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                fontWeight={500}
                bgGradient="linear(to-r,yellow.400,orange.300)"
                bgClip={"text"}
              >
                {name}
              </Heading>
            </Stack>
            <ScaleFade
              initialScale={0.1}
              in={enterCount > 0}
              whileHover={{ scale: 1.1 }}
            >
              <Flex
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                maxW={"500px"}
                height={"260px"}
                _after={{
                  transition: "all .4s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 71,
                  left: 0,
                  background: `url("images/wb.png") center/contain`,

                  filter: "blur(5px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    pos: "absolute",
                    filter: "blur(10px)",
                  },
                }}
              >
                <Link href={deploymentLink} isExternal>
                  <Image
                    mt={73}
                    rounded={"lg"}
                    height={257}
                    width={500}
                    objectFit={"cover"}
                    objectPosition={"left bottom"}
                    src={url}
                    alt="Project Photos"
                  />
                </Link>
              </Flex>
            </ScaleFade>
            <VStack
              direction={["column", "row"]}
              spacing={{ base: "1", md: "1" }}
              align="stretch"
              pt={"90px"}
            >
              <Box
                mb={{ md: 3 }}
                align={"center"}
                h={"85px"}
                pb={{ base: "160px", md: "10px" }}
              >
                <Text fontSize={"15px"} color={fontColor} textAlign={"start"}>
                  {description}
                  {loginDetails.length > 0 ? (
                    <Popover
                      initialFocusRef={initialFocusRef}
                      placement="top"
                      closeOnBlur={true}
                      trigger="hover"
                      openDelay={300}
                    >
                      <PopoverTrigger>
                        <Link
                          fontSize={"md"}
                          align={"center"}
                          bgGradient="linear(to-r,yellow.400,orange.300)"
                          bgClip={"text"}
                        >
                          Guest login....
                        </Link>
                      </PopoverTrigger>
                      <Box zIndex="popover" w="100%" h="100%">
                        <PopoverContent
                          color={fontColor}
                          bgGradient={["linear(to-b, gray.900, gray.700)"]}
                          borderColor="gray.900"
                          px={1}
                          w="auto"
                        >
                          <PopoverHeader
                            pt={4}
                            fontWeight="semi-bold"
                            border="0"
                            fontSize={{ base: "16px", md: "md" }}
                            bgGradient="linear(to-r,yellow.400,orange.300)"
                            bgClip={"text"}
                          >
                            Guest LogIn Credentials
                          </PopoverHeader>
                          <PopoverArrow bg="gray.900" />

                          <PopoverBody>
                            {loginDetails.map((detail, i) =>
                              detail.split("/").length === 3 ? (
                                <Box key={i}>
                                  <Divider
                                    borderColor="gray.600"
                                    mb={{ base: 1, md: 1 }}
                                  />
                                  <Text
                                    mb={2}
                                    fontSize={"15px"}
                                    bgGradient="linear(to-r,yellow.400,orange.300)"
                                    bgClip={"text"}
                                    display={"inline-block"}
                                    w={20}
                                  >
                                    {detail.split("/")[0]}
                                  </Text>
                                  <Text
                                    display={"inline"}
                                    fontSize={{ base: "14px", md: "15px" }}
                                  >
                                    User name : {detail.split("/")[1]}
                                  </Text>
                                </Box>
                              ) : detail.split("/").length === 1 ? (
                                <Box key={i} pb={2}>
                                  <Divider
                                    borderColor="gray.600"
                                    mb={{ base: 1, md: 2 }}
                                  />
                                  <Text
                                    fontSize={"15px"}
                                    bgGradient="linear(to-r,yellow.400,orange.300)"
                                    bgClip={"text"}
                                    display={"inline-block"}
                                    w={20}
                                  >
                                    Password
                                  </Text>
                                  <Text
                                    display={"inline"}
                                    fontSize={{ base: "14px", md: "15px" }}
                                  >
                                    {detail.split("/")[0]}
                                  </Text>
                                </Box>
                              ) : (
                                <Box key={i} pb={2}>
                                  <Divider
                                    borderColor="gray.600"
                                    mb={{ base: 1, md: 2 }}
                                  />
                                  <Text
                                    fontSize={"sm"}
                                    bgGradient="linear(to-r,yellow.400,orange.300)"
                                    bgClip={"text"}
                                    display={"inline-block"}
                                    w={20}
                                  >
                                    User name
                                  </Text>
                                  <Text display={"inline"} ml={3}>
                                    {detail.split("/")[0]}
                                  </Text>
                                  <HStack>
                                    <Text
                                      fontSize={"sm"}
                                      bgGradient="linear(to-r,yellow.400,orange.300)"
                                      bgClip={"text"}
                                      display={"inline-block"}
                                      w={20}
                                    >
                                      Password
                                    </Text>
                                    <Text display={"inline"} ml={1}>
                                      {detail.split("/")[1]}
                                    </Text>
                                  </HStack>
                                </Box>
                              )
                            )}
                          </PopoverBody>
                        </PopoverContent>
                      </Box>
                    </Popover>
                  ) : null}
                </Text>
              </Box>

              <Divider
                borderColor="gray.600"
                mt={{ base: "-4px", sm: "-60px", md: "50px", lg: "0px" }}
              />
              <Wrap
                h={{ md: 40, lg: 90 }}
                spacing={{ base: "5px", md: "10px" }}
                display={"flex"}
                justify="center"
                alignItems="center"
                bgGradient={["linear(to-b, gray.900, gray.700)"]}
                p={2}
                pt={{ base: 6, md: 3 }}
                pb={{ base: 1, md: 3 }}
                rounded={"lg"}
              >
                {technologies.map((technology, i) => (
                  <WrapItem key={i}>
                    <Center>
                      <Image
                        mt={{ base: 0, md: 0 }}
                        mb={{ base: 3, md: 0 }}
                        key={i}
                        rounded={"lg"}
                        height={{ base: 6, md: 6 }}
                        width={{ base: "80px", md: "100px" }}
                        objectFit={"contain"}
                        src={technology}
                      ></Image>
                    </Center>
                  </WrapItem>
                ))}
              </Wrap>

              <Divider borderColor="gray.600" mb={{ base: 1, md: 1 }} />

              <Box
                h="40px"
                align={"center"}
                mt={4}
                borderRadius="full"
                bgGradient={["linear(to-b, gray.600, gray.800)"]}
              >
                <Link href={gitHubLink} isExternal>
                  <IconButton
                    bgGradient={["linear(to-b, gray.600, gray.800)"]}
                    boxSize={10}
                    color={"#a5b5bc"}
                    isRound={true}
                    variant="solid"
                    aria-label="Done"
                    fontSize="20px"
                    icon={<FaGithub />}
                    _hover={{
                      color: "yellow.500",
                      fontSize: { base: "20px", md: "24px" },
                    }}
                  />
                </Link>
              </Box>
            </VStack>
          </Box>
        </SlideFade>
      </Center>
    </>
  );
}
