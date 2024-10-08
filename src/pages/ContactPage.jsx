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
  useToast,
  HStack,
  Text,
  Image,
  Link,
  SlideFade,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
// Importing  icons
import { BsPerson } from "react-icons/bs";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

// Importing a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

import { useState, useEffect } from "react";
export default function ContactPage() {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-10px" },
    { disconnectOnLeave: false },
    {}
  );
  const toastIdRef = React.useRef();
  const toast = useToast();
  //success is set to false initially
  const [success, setSuccess] = useState(false);
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
  //custom toast will appear if the email is sent successfully
  useEffect(() => {
    if (success) {
      toastIdRef.current = toast({
        position: "bottom",
        //success is set to false after closing the toast
        onCloseComplete: () => {
          setSuccess(false);
        },
        render: () => (
          <Box
            color="white"
            px={4}
            bgGradient="linear(to-b, #FFFFF0, #FFFFF0)"
            rounded={"lg"}
            pb={4}
            border="5px double #1C4532"
          >
            <Flex justify={"flex-end"} pt={2}>
              <Button
                onClick={close}
                size={6}
                bgColor={"#276749"}
                color={"white"}
                _hover={{ bgColor: "green.900" }}
                fontWeight={"semibold"}
              >
                <RxCross2 />
              </Button>
            </Flex>
            <HStack spacing={3} py={1}>
              <TbDiscountCheckFilled fontSize={20} color="#276749" />
              <Text fontWeight={"semibold"} color="#1C4532">
                Message sent successfully
              </Text>
            </HStack>
          </Box>
        ),
      });
    }
  }, [success]);
  //function to close the toast
  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
      setSuccess(false);
    }
  }

  //renders the 'Contact Me ' section
  return (
    <Flex
      align="center"
      justify="center"
      id="contact"
      pos="relative"
      bg="black"
      _before={{
        md: {
          w: "full",
          content: '""',
          bgImage: "url(images/contact.png)",
          bgSize: "cover",
          pos: "absolute",
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
          borderBottomLeftRadius: 80,
          borderTopRightRadius: 80,
          opacity: 0.2,
        },
      }}
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, sm: 16, md: 16, lg: 16 }}
        p={{ base: 5, sm: 16, md: 16, lg: 16 }}
      >
        <VStack
          spacing={{ base: 4, md: 20, lg: 20 }}
          borderRadius="3xl"
          bgGradient={{
            md: "linear(to-b, gray.900, gray.700)",
            base: "black",
          }}
          mt={{ base: 90, md: 100, lg: 30 }}
          w={{ base: "auto", md: "2xl", lg: "2xl" }}
          pt={50}
          pb={20}
          backdropFilter="auto"
          backdropBlur="8px"
        >
          <VStack spacing={{ base: 4, md: 5, lg: 5 }}>
            <Heading
              ref={ref}
              fontSize={{ base: "2xl", md: "2xl" }}
              fontFamily={"body"}
              fontWeight={500}
              bgGradient="linear(to-r,yellow.400,orange.300)"
              bgClip={"text"}
              mt={{ base: "70px", md: "0px" }}
              mb={{ base: "0px", md: "10px" }}
            >
              Contact
            </Heading>

            <SlideFade offsetY="100px" initialScale={0.1} in={enterCount > 0}>
              <Text
                fontSize={{ base: "sm", md: "lg" }}
                fontFamily={"body"}
                fontWeight={500}
                color={fontColor}
                mt={{ base: "0px", md: "0px" }}
                mb={{ base: "0px", md: "10px" }}
                textAlign={"center"}
                px={5}
              >
                Get in touch with me via social media or email
              </Text>
            </SlideFade>
            {/*Linkedin link */}

            <HStack>
              <Flex
                justify="center"
                flexDirection={{ base: "column", md: "row" }}
              >
                <SlideFade
                  offsetY="100px"
                  initialScale={0.1}
                  in={enterCount > 0}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    href={
                      "https://www.linkedin.com/in/shimna-puthanayil-766727173/"
                    }
                    isExternal
                  >
                    <HStack mr={8}>
                      <Image
                        mt={{ base: 0, md: 0 }}
                        mb={{ base: 3, md: 0 }}
                        rounded={"lg"}
                        height={{ base: 10, md: 10 }}
                        width={{ base: "50px", md: "50px" }}
                        objectFit={"contain"}
                        src={"images/innl.png"}
                      ></Image>
                      <Text
                        fontWeight={"medium"}
                        bgGradient="linear(to-r,yellow.400,orange.300)"
                        bgClip={"text"}
                      >
                        LinkedIn
                      </Text>
                    </HStack>
                  </Link>
                </SlideFade>

                {/*email id */}
                <SlideFade
                  offsetY="100px"
                  initialScale={0.1}
                  in={enterCount > 0}
                  whileHover={{ scale: 1.1 }}
                >
                  <HStack mr={8}>
                    <Image
                      mt={{ base: 0, md: 0 }}
                      mb={{ base: 3, md: 0 }}
                      rounded={"lg"}
                      height={{ base: 10, md: 10 }}
                      width={{ base: "50px", md: "50px" }}
                      objectFit={"contain"}
                      src={"images/telegram.png"}
                    ></Image>

                    <Text
                      fontWeight={"medium"}
                      bgGradient="linear(to-r,yellow.400,orange.300)"
                      bgClip={"text"}
                    >
                      shimna.pu@gmail.com
                    </Text>
                  </HStack>
                </SlideFade>
                {/*instagram link */}
                <SlideFade
                  offsetY="100px"
                  initialScale={0.1}
                  in={enterCount > 0}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    href={"https://www.instagram.com/quirky.shots"}
                    isExternal
                  >
                    <HStack mr={8}>
                      <Image
                        mt={{ base: 0, md: 0 }}
                        mb={{ base: 3, md: 0 }}
                        rounded={"lg"}
                        height={{ base: 10, md: 10 }}
                        width={{ base: "50px", md: "50px" }}
                        objectFit={"contain"}
                        src={"images/inss.png"}
                      ></Image>

                      <Text
                        fontWeight={"medium"}
                        bgGradient="linear(to-r,yellow.400,orange.300)"
                        bgClip={"text"}
                      >
                        Instagram
                      </Text>
                    </HStack>
                  </Link>
                </SlideFade>
              </Flex>
            </HStack>
          </VStack>

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
              w={{ base: "auto", md: "600px", lg: "600px" }}
              mt={{ base: 5, md: -10 }}
            >
              <VStack spacing={5}>
                {/*Formik */}
                <Formik
                  initialValues={{ name: "", email: "", message: "" }}
                  validateOnBlur={false}
                  validateOnChange={false}
                  onSubmit={async (values, actions) => {
                    setTimeout(() => {
                      actions.setSubmitting(false);
                    }, 1000);

                    const serviceId = "service_tl4o2cr";
                    const templateId = "template_in6xf2c";

                    //sends message to the given email id using emailjs
                    emailjs
                      .send(serviceId, templateId, {
                        message: values.message,
                        name: values.name,
                        email: values.email,
                      })
                      .then((res) => {
                        //sets the success to true
                        setSuccess(true);
                        actions.resetForm();
                      })
                      // Handle errors
                      .catch((err) =>
                        console.error(
                          "Oh well, you failed. Here some thoughts on the error that occured:",
                          err
                        )
                      );
                  }}
                >
                  {(props) => (
                    <Form onSubmit={props.handleSubmit}>
                      {/* name */}
                      <Field name="name" validate={validateName}>
                        {({ field, form }) => (
                          <SlideFade
                            offsetY="100px"
                            initialScale={0.1}
                            in={enterCount > 0}
                          >
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
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  value={props.values.name || ""}
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
                          </SlideFade>
                        )}
                      </Field>
                      {/* email */}
                      <Field name="email" validate={validateEmailId}>
                        {({ field, form }) => (
                          <SlideFade
                            offsetY="100px"
                            initialScale={0.1}
                            in={enterCount > 0}
                          >
                            <FormControl
                              isInvalid={
                                form.errors.email && form.touched.email
                              }
                              isRequired
                            >
                              <FormLabel mt={2} color={fontColor}>
                                Email
                              </FormLabel>

                              <InputGroup>
                                <InputLeftElement>
                                  <MdOutlineEmail color={fontColor} />
                                </InputLeftElement>
                                <Input
                                  {...field}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  value={props.values.email || ""}
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
                          </SlideFade>
                        )}
                      </Field>
                      {/* message */}
                      <Field name="message" validate={validateMessage}>
                        {({ field, form }) => (
                          <SlideFade
                            offsetY="100px"
                            initialScale={0.1}
                            in={enterCount > 0}
                          >
                            <FormControl
                              isInvalid={
                                form.errors.message && form.touched.message
                              }
                              isRequired
                            >
                              <FormLabel mt={2} color={fontColor}>
                                Message
                              </FormLabel>

                              <Textarea
                                p={2}
                                {...field}
                                value={props.values.message || ""}
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
                          </SlideFade>
                        )}
                      </Field>
                      <SlideFade
                        offsetY="100px"
                        initialScale={0.1}
                        in={enterCount > 0}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Button
                          mt={10}
                          colorScheme="black"
                          isLoading={props.isSubmitting}
                          type="submit"
                          bgGradient={[
                            "linear(to-b, gray.700,gray.800,  gray.800,gray.700)",
                          ]}
                          color={fontColor}
                          borderRadius="full"
                          _hover={{
                            bg: "gray.700",
                            color: "yellow.500",
                          }}
                          width="full"
                        >
                          Send Message
                        </Button>
                      </SlideFade>
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
