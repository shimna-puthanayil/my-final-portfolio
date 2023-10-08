import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { ChakraProvider, GridItem } from "@chakra-ui/react";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <ChakraProvider>
        <Nav />
        <GridItem bg="black" area={"main"} minHeight="100vh" h="auto" pb={20} >
          <Outlet />
        </GridItem>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;