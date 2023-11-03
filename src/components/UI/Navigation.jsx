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
          <BreadcrumbItem
            p={4}
            h="20px"
            w="90px"
            key={i}
            onClick={() => handlePageChange(i)}
            color={currentPage === i ? "rgb(217, 185, 121)" : "#ccd6db"}
            _hover={{
              color: "rgb(217, 185, 121)",
              textDecoration: "none",
              bgColor: "gray.900",
              borderRadius: "full",
            }}
          >
            {link}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  );
}
