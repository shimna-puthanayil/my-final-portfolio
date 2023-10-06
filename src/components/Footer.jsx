import { HStack, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
const gitHubLink = "https://github.com/shimna-puthanayil";
export default function Footer() {
  // The Footer component will render the links to github, linkedIn and Twitter
  return (
    <>
      <HStack
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={20}
        bg={"gray.900"}
      >
        <Link href={gitHubLink} isExternal>
          <FaGithub size={"20px"} color={"#a5b5bc"} />
        </Link>{" "}
      </HStack>
    </>
  );
}
