import { Flex } from "@chakra-ui/layout";
import {
  Box,
  Center,
  Stack,
  Heading,
  Text,
  Image,
  Link,
  VStack,
  StackDivider,
  Divider,
} from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa6";
export default function Project({
  project: { name, url, deploymentLink, description, gitHubLink },
}) {
  const fontColor = "rgb(217, 185, 121)";
  return (
    <>
      <Center pt={10}>
        <Box
          role={"group"}
          p={6}
          maxW={"500px"}
          height={{ base: "533", md: "485px" }}
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
          zIndex={1}
        >
          <Stack pt={1} align={"center"}>
            <Heading
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={500}
              color={fontColor}
            >
              {name}
            </Heading>
          </Stack>
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
              top: 70,
              left: 0,
              background: `url("images/wb.png") center/contain`,
              backgroundSize: "auto",
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
                height={252}
                width={500}
                objectFit={"cover"}
                src={url}
                alt="Project Photos"
              />
            </Link>
          </Flex>
          <VStack
            direction={["column", "row"]}
            spacing={{ base: "1", md: "1" }}
            align="stretch"
            pt={"90px"}
          >
            <Box h="70px">
              <Text
                fontSize={"sm"}
                pb={"10px"}
                align={"center"}
                color="#ccd6db"
                mb={10}
              >
                {description}
              </Text>
            </Box>
            <Divider
              borderColor="gray.600"
              mt={{ base: 12, md: 1 }}
              mb={{ base: 1, md: 1 }}
            />
            <Box h="30px" align={"center"} pt={1}>
              <Link href={gitHubLink} isExternal>
                <FaGithub size={"20px"} color={"#a5b5bc"} />
              </Link>
            </Box>
          </VStack>
        </Box>
      </Center>
    </>
  );
}
