//importing CHAKRA UI components
import { HStack, Link, IconButton, Box } from "@chakra-ui/react";
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
        justifyContent="center"
        height={20}
        bg={"gray.900"}
      >
        <Link href={gitHubLink} ml={2} isExternal>
          <IconButton
            bgColor={"gray.900"}
            size={"22px"}
            color={"rgb(217, 185, 121)"}
            isRound={true}
            variant="solid"
            aria-label="Done"
            fontSize="22px"
            icon={<FaGithub />}
            _hover={{
              color: "#a5b5bc",
              fontSize: { base: "20px", md: "24px" },
            }}
          ></IconButton>
        </Link>

        <Link href={linkedInLink} ml={2} isExternal mx={10}>
          <IconButton
            bgColor={"gray.900"}
            size={"22px"}
            color={"rgb(217, 185, 121)"}
            isRound={true}
            variant="solid"
            aria-label="Done"
            fontSize="22px"
            icon={<FaLinkedin />}
            _hover={{
              color: "#a5b5bc",
              fontSize: { base: "20px", md: "24px" },
            }}
          ></IconButton>
        </Link>

        <Link href={twitterLink} ml={2} isExternal>
          <IconButton
            bgColor={"gray.900"}
            size={"22px"}
            color={"rgb(217, 185, 121)"}
            isRound={true}
            variant="solid"
            aria-label="Done"
            fontSize="22px"
            icon={<FaTwitter />}
            _hover={{
              color: "#a5b5bc",
              fontSize: { base: "20px", md: "24px" },
            }}
          ></IconButton>
        </Link>
      </HStack>
    </>
  );
}
