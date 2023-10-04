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
