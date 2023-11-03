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
} from "@chakra-ui/react";

//import icon
import { FaGithub } from "react-icons/fa6";

//render details about individual projects
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
                <IconButton
                  bgColor={"gray.900"}
                  size={"20px"}
                  color={"#a5b5bc"}
                  isRound={true}
                  variant="solid"
                  aria-label="Done"
                  fontSize="20px"
                  icon={<FaGithub />}
                  _hover={{
                    color: "rgb(217, 185, 121)",
                    fontSize: { base: "20px", md: "24px" },
                  }}
                ></IconButton>
              </Link>
            </Box>
          </VStack>
        </Box>
      </Center>
    </>
  );
}
