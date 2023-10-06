import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactFormWithSocialButtons() {
  const fontColor = "rgb(217, 185, 121)";
  return (
    <Flex align="center" justify="center" id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack
            spacing={{ base: 4, md: 8, lg: 20 }}
            borderRadius="lg"
            bgGradient={["linear(to-b, gray.900, gray.700)"]}
            mt={100}
            w="2xl"
            pt={50}
            pb={20}
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              fontFamily={"body"}
              fontWeight={500}
              color={fontColor}
            >
              Contact
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Box
                bg={useColorModeValue("gray.100", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
                w="500px"
                background={"black"}
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel color="#ccd6db">Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson color="#ccd6db" />
                      </InputLeftElement>
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="#ccd6db">Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail color="#ccd6db" />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="#ccd6db">Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    colorScheme="black"
                    bgGradient={["linear(to-b, gray.900, gray.700)"]}
                    color="white"
                    _hover={{
                      bg: "gray.900",
                    }}
                    width="full"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
