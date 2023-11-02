//importing CHAKRA UI components
import { Breadcrumb, BreadcrumbItem, Center } from "@chakra-ui/react";
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
          <Center
            h="20px"
            borderRadius="full"
            p={4}
            w="100px"
            _hover={{ bg: "gray.900" }}
          >
            <BreadcrumbItem
              key={i}
              onClick={() => handlePageChange(i)}
              color={currentPage === i ? "rgb(217, 185, 121)" : "#ccd6db"}
              _hover={{
                color: "rgb(217, 185, 121)",
                textDecoration: "none",
              }}
            >
              {link}
            </BreadcrumbItem>
          </Center>
        ))}
      </Breadcrumb>
    </>
  );
}
