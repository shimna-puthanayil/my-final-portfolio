//importing  formik to build forms by integrating Chakra UI with Formik
import { Field, Form, Formik } from "formik";

//importing CHAKRA UI components
import {
  Box,
  FormErrorMessage,
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

// Importing  icons
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

// Importing a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";
export default function ContactPage() {
  const headingColor = "rgb(217, 185, 121)";
  const fontColor = "#ccd6db";
  const borderColor = "gray.500";
  const borderColorOnFocus = "gray.100";
  //function to validate name
  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }

    return error;
  }
  //function to validate message
  function validateMessage(value) {
    let error;
    if (!value) {
      error = "Message is required";
    }

    return error;
  }

  //function to validate email
  function validateEmailId(value) {
    let error;
    if (!value) {
      error = "Email is required";
      return error;
    }
    if (!validateEmail(value)) {
      error = "Email  is invalid";
      return error;
    }
  }
  return (
    <Flex align="center" justify="center" id="contact">
      <Box
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
            Contact Me
          </Heading>

          <Stack
            spacing={{ base: 20, md: 8, lg: 20 }}
            direction={{ base: "column", md: "row" }}
          >
            <Box
              bg={useColorModeValue("gray.900", "gray.700")}
              borderRadius="3xl"
              p={8}
              color={useColorModeValue("gray.700", "whiteAlpha.900")}
              shadow="base"
              // w="600px"
              w={{ base: "auto", md: "600px", lg: "600px" }}
              mt={{ base: 5, md: -10 }}
            >
              <VStack spacing={5}>
                <Formik
                  initialValues={{}}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      // alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }, 1000);
                    console.log(values.email);
                    console.log(values.name);
                  }}
                >
                  {(props) => (
                    <Form>
                      <Field name="name" validate={validateName}>
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.name && form.touched.name}
                            isRequired
                          >
                            <FormLabel color={fontColor}>Name</FormLabel>

                            <InputGroup>
                              <InputLeftElement>
                                <BsPerson color="#ccd6db" />
                              </InputLeftElement>
                              <Input
                                {...field}
                                placeholder="name"
                                w={{ base: "auto", md: "500px", lg: "500px" }}
                                color={fontColor}
                                borderColor={borderColor}
                                _focusVisible={{
                                  borderColor: { borderColorOnFocus },
                                }}
                              />
                            </InputGroup>
                            <FormErrorMessage>
                              {form.errors.name}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="email" validate={validateEmailId}>
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.email && form.touched.email}
                            isRequired
                          >
                            <FormLabel color={fontColor}>Email</FormLabel>

                            <InputGroup>
                              <InputLeftElement>
                                <MdOutlineEmail color={fontColor} />
                              </InputLeftElement>
                              <Input
                                {...field}
                                placeholder="email"
                                color={fontColor}
                                borderColor={borderColor}
                                _focusVisible={{
                                  borderColor: { borderColorOnFocus },
                                }}
                              />
                            </InputGroup>
                            <FormErrorMessage>
                              {form.errors.email}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="message" validate={validateMessage}>
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.message && form.touched.message
                            }
                            isRequired
                          >
                            <FormLabel color={fontColor}>Message</FormLabel>

                            <Textarea
                              {...field}
                              name="message"
                              placeholder="Your Message"
                              rows={6}
                              resize="none"
                              h={200}
                              color={fontColor}
                              borderColor={borderColor}
                              _focusVisible={{
                                borderColor: { borderColorOnFocus },
                              }}
                            />
                            <FormErrorMessage>
                              {form.errors.message}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Button
                        mt={10}
                        colorScheme="black"
                        isLoading={props.isSubmitting}
                        type="submit"
                        bgGradient={["linear(to-b, gray.600, gray.800)"]}
                        color={fontColor}
                        borderRadius="full"
                        _hover={{
                          bg: "gray.700",
                        }}
                        width="full"
                      >
                        Send Message
                      </Button>
                    </Form>
                  )}
                </Formik>
              </VStack>
            </Box>
          </Stack>
        </VStack>
      </Box>
    </Flex>
  );
}
