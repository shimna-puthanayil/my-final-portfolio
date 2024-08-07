import { useState } from "react";
// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import Navigation from "./UI/Navigation";
//importing CHAKRA UI components
import { Stack, Heading, Box, Center } from "@chakra-ui/react";
export default function Header() {
  // useState accepts  the initial value of the state variable which is set to zero to set the current section as 'About me'.
  const [currentPage, setCurrentPage] = useState(0);
  // This is a handler that we will reference in `onClick` attribute of links in NavBar
  const handlePageChange = (page) => setCurrentPage(page);
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
      <Stack
        as="header"
        position="fixed"
        direction={["column", "column", "column", "row"]}
        spacing="24px"
        align="center"
        justify={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "space-between",
        }}
        height={{ base: 200, sm: 200, md: 200, lg: 100 }}
        bg={"gray.900"}
        width="100%"
        zIndex={2}
      >
        <Box
          role={"group"}
          spacing="24px"
          align="center"
          bg={"gray.900"}
          boxSize={100}
          _groupHover={{
            before: {
              filter: "blur(100px)",
            },
          }}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            h="50px"
            w="300px"
            pos={"relative"}
            _after={{
              transition: "all .4s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 7,
              left: 4,

              backgroundImage: `url("images/wb.png")`,
              ml: { base: "-115px", md: "-115px", lg: "15px" },
              mt: { base: -7, md: -7 },
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
              bg="blackAlpha.900"
              h="50px"
              borderRadius="full"
              p={5}
              ml={{ base: "-200px", md: "-200px", lg: "30px" }}
              mt={{ base: 10, sm: 10, md: 7 }}
              w="300px"
            >
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                fontWeight={500}
                bgGradient="linear(to-r,yellow.400,orange.300)"
                bgClip={"text"}
              >
                Shimna Puthanayil
              </Heading>
            </Center>
          </Box>
        </Box>
        <Box>
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            links={[
              <Link onClick={() => handlePageChange(0)} align={"center"} to="/">
                About
              </Link>,
              <Link onClick={() => handlePageChange(1)} to="/Portfolio">
                Portfolio
              </Link>,
              <Link onClick={() => handlePageChange(2)} to="/Contact">
                Contact
              </Link>,
              <Link onClick={() => handlePageChange(3)} to="/Resume">
                Resume
              </Link>,
            ]}
          />
        </Box>
      </Stack>
    </>
  );
}
