import { useRouteError } from "react-router-dom";
import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
const headingColor = "rgb(217, 185, 121)";
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Flex justify="center" bg={"black"} minHeight="100vh">
      <Box
        bg={"black"}
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <VStack
          spacing={{ base: 4, md: 20, lg: 20 }}
          borderRadius="lg"
          bgGradient={{
            md: "linear(to-b, gray.900, gray.700)",
            base: "black",
          }}
          mt={90}
          w={{ base: "auto", md: "2xl", lg: "2xl" }}
          pt={50}
          pb={20}
        >
          <Heading
            fontSize={{ base: "2xl", md: "2xl" }}
            fontFamily={"body"}
            fontWeight={500}
            color={headingColor}
            mt={{ base: "70px", md: "0px" }}
          >
            Oops!
          </Heading>

          <Text  color="#ccd6db">
            Sorry, an unexpected error has occurred.
          </Text>

          <i>{error.statusText || error.message}</i>
        </VStack>
      </Box>
    </Flex>
  );
}
