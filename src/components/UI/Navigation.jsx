//importing CHAKRA UI components
import { Box, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";

//renders the navigation links
export default function Navigation({ links, currentPage }) {
  return (
    <>
      <Breadcrumb separator=" " display="flex" px={50}>
        {links.map((link, i) => (
          <BreadcrumbItem key={i} alignSelf={"center"} h="20px">
            <Box
              key={i}
              textAlign={"center"}
              w={{ md: "100px" }}
              p={{ base: 1, md: 1 }}
              bgGradient={
                currentPage === i
                  ? "linear(to-r,yellow.400,orange.300)"
                  : "linear(to-r,#ccd6db,#ccd6db)"
              }
              bgClip={"text"}
              _hover={{
                textDecoration: "none",
                color: "yellow.500",
                bgGradient: {
                  md: "linear(to-b, gray.700,gray.800,gray.800,gray.700)",
                  base: "linear(to-b, gray.900,gray.900,gray.900,gray.900)",
                },

                bgClip: "padding-box",
                borderRadius: "full",
              }}
            >
              {link}
            </Box>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  );
}
