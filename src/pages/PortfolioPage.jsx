import { useState, useEffect } from "react";
import {
  SimpleGrid,
  Divider,
  Container,
  Stack,
  Heading,
} from "@chakra-ui/react";
//Importing the required component for linking between pages

import Project from "../components/UI/ProjectSections/Project";

import projectsInfo from "../utils/projectsInfo";

export default function PortfolioPage() {
  const fontColor = "rgb(217, 185, 121)";
  //  react hooks

  const [projects, setProjects] = useState([]);
  const getProjectInfo = () => {
    const projects = projectsInfo.getProjects();
    setProjects(projects);
  };
  // Call this function on page load to retrieve the information about all projects
  useEffect(() => {
    getProjectInfo();
  }, []);

  // Iterate over each  project to display its details
  return (
    <>
      <Container maxW="1100px" height={"auto"} bg="black" centerContent>
        <Stack
          align={"center"}
          mt={{ base: "152px", md: "50px" }}
          pb={10}
          pt={102}
        >
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            color={fontColor}
          >
            Portfolio
          </Heading>

          <Divider orientation="horizontal" mt={5} borderColor="gray.600" />
          <SimpleGrid columns={[1, null, 2]} spacing={8}>
            {projects.map((project, i) => (
              <Project key={i} project={project} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
