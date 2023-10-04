import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { ChakraProvider, GridItem } from "@chakra-ui/react";
function App() {
  return (
    <>
      <ChakraProvider>
        <Nav />
        <GridItem bg="black" area={"main"} h="container.xl">
          <Outlet />
        </GridItem>
      </ChakraProvider>
    </>
  );
}

export default App;
