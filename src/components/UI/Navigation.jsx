//importing CHAKRA UI components
import { Box, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
//renders the navigation links
export default function Navigation({ links, handlePageChange, currentPage }) {
  return (
    <>
      <Breadcrumb
        separator=" "
        display="flex"
        px={50}
        _visited={{ color: "rgb(217, 185, 121)" }}
      >
        {links.map((link, i) => (
          <BreadcrumbItem
            key={i}
            alignSelf={"center"}
            h="20px"
            color={currentPage === i ? "rgb(217, 185, 121)" : "#ccd6db"}
            // _hover={{
            //   color: "rgb(217, 185, 121)",
            //   textDecoration: "none",
            //   bgGradient: {
            //     md: [
            //       "linear(to-b, gray.900,gray.800, gray.700, gray.800,gray.900)",
            //     ],
            //   },
            //   borderRadius: "full",
            // }}
          >
            <Box
              textAlign={"center"}
              onClick={() => handlePageChange(i)}
              w={{ md: "100px" }}
              p={{ base: 1, md: 1 }}
              _hover={{
                color: "rgb(217, 185, 121)",
                textDecoration: "none",
                bgGradient: {
                  md: [
                    "linear(to-b, gray.900,gray.800, gray.700, gray.800,gray.900)",
                  ],
                },
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
