import { Center } from "@chakra-ui/layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  Stack,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";

export default function Nav({ links }) {
  return (
    <>
      <Stack
        direction={["column", "row"]}
        spacing="24px"
        align="center"
        justify={{ base: "center", md: "space-between" }}
        bg={"gray.700"}
        boxSize={100}
        width="100%"
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
          rounded={"lg"}
          h="50px"
          w="300px"
          _after={{
            transition: "all .4s ease",
            content: '""',
            h: "44px",
            w: "300px",
            pos: "absolute",
            top: 7,
            left: 4,
            backgroundImage: `url("images/wb.png")`,
            borderRadius: "full",
            filter: "blur(10px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              pos: "absolute",
              filter: "blur(100px)",
            },
          }}
        >
          <Center
            bg="gray.900"
            h="50px"
            borderRadius="full"
            p={5}
            ml={{ base: "initial", md: 4 }}
            mt={{ base: 10, md: "initial" }}
            w="300px"
          >
            <Heading
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={500}
              color=" rgb(217, 185, 121)"
            >
              Shimna Puthanayil
            </Heading>
          </Center>
        </Box>
        <Box bg="green.400">
          <Breadcrumb separator=" " bg={"gray.700"} display="flex" px={50}>
            {links.map((link) => (
              <BreadcrumbItem color=" rgb(217, 185, 121)">
                {link}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </Box>
      </Stack>
    </>
  );
}
