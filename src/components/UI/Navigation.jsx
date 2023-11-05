//importing CHAKRA UI components
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
 
} from "@chakra-ui/react";
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
            p={4}
            px="auto"
            h="20px"
            w="90px"
            color={currentPage === i ? "rgb(217, 185, 121)" : "#ccd6db"}
            _hover={{
              color: "rgb(217, 185, 121)",
              textDecoration: "none",
              bgGradient: [
                "linear(to-b, gray.900,gray.800, gray.700, gray.800,gray.900)",
              ],
              borderRadius: "full",
            }}
          >
            <Box textAlign={"center"} onClick={() => handlePageChange(i)}>
              {link}
            </Box>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  );
}
