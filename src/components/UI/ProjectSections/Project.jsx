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
} from "@chakra-ui/react";

//import icon
import { FaGithub } from "react-icons/fa6";

//render details about individual projects
export default function Project({
  project: { name, url, deploymentLink, description, gitHubLink, technologies },
}) {
  return (
    <>
      <Center pt={10}>
        <Box
          role={"group"}
          p={6}
          maxW={"500px"}
          height="auto"
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
              bgGradient="linear(to-r,yellow.400,orange.300)"
              bgClip={"text"}
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
              mt={{ base: "60px", sm: "60px", md: "50px", lg: "20px" }}
            />
            <Wrap
              spacing={{ base: "5px", md: "10px" }}
              justify="center"
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

            <Divider
              borderColor="gray.600"
              // mt={{ base: 0, sm: 4, md: 4, lg: 4 }}
              mb={{ base: 1, md: 1 }}
            />

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
                    color: "rgb(217, 185, 121)",
                    fontSize: { base: "20px", md: "24px" },
                  }}
                />
              </Link>
            </Box>
          </VStack>
        </Box>
      </Center>
    </>
  );
}
