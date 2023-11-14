//importing CHAKRA UI components
import { Box, Breadcrumb, BreadcrumbItem, Link, Text } from "@chakra-ui/react";
//renders the navigation links
export default function Navigation({ links, handlePageChange, currentPage }) {
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
              color={currentPage === i ? "rgb(217, 185, 121)" : "#ccd6db"}
              _hover={{
                textDecoration: "none",
                color: "rgb(217, 185, 121)",
                bgGradient: {
                  md: ["linear(to-b, gray.700,gray.800,  gray.800,gray.700)"],
                },
                borderRadius: "full",
              }}
            >
              {link}
            </Box>
            //{" "}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  );
}
