import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

export default function Nav({ links }) {
  return (
    <>
      <Breadcrumb separator=" " boxSize={100} width={'full'} bg={"gray.700"}>
        {links.map((link) => link)}
      </Breadcrumb>
    </>
  );
}
