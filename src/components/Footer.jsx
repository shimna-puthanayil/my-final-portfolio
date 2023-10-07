import { HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";

const gitHubLink = "https://github.com/shimna-puthanayil";
const linkedInLink = "https://www.linkedin.com/in/shimna-puthanayil-766727173/";
const twitterLink = "https://twitter.com/Shimna_Anoop";
export default function Footer() {
  // The Footer component will render the links to github, linkedIn and Twitter
  return (
    <>
      <HStack
        display="flex"
        // alignItems="center"
        justifyContent="center"
        height={20}
        bg={"gray.900"}
      >
        <Link href={gitHubLink} ml={2} isExternal>
          <FaGithub size={"22px"} color={"rgb(217, 185, 121)"} />
        </Link>
        <Link href={linkedInLink} ml={2} isExternal>
          <FaLinkedin size={"22px"} color={"rgb(217, 185, 121)"} />
        </Link>
        <Link href={twitterLink} ml={2} isExternal>
          <FaTwitter size={"22px"} color={"rgb(217, 185, 121)"} />
        </Link>
      </HStack>
    </>
  );
}
