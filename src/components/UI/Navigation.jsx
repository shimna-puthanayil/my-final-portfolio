import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  SelectField,
} from "@chakra-ui/react";

export default function Navigation({ links, handlePageChange, currentPage }) {
  console.log({ currentPage });
  return (
    <>
      <Breadcrumb
        separator=" "
        display="flex"
        px={50}
        _visited={{ color: "rgb(217, 185, 121)" }}
      >
        {links.map((link, i) => (
          <BreadcrumbItem key={i} onClick={() => handlePageChange(i)}>
            <BreadcrumbLink
              color={currentPage === i ? "rgb(217, 185, 121)" : "#ccd6db"}
              _hover={{ color: "rgb(217, 185, 121)", textDecoration: "none" }}
            >
              {link}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  );
}
