// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/UI/scrollToTop";
//Import ChakraProvider to add styling to the components
import { ChakraProvider, GridItem } from "@chakra-ui/react";
import Footer from "./components/Footer";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <ChakraProvider>
        {/*scrolls the window up on every navigation */}
        <ScrollToTop />
        <Header />
        <GridItem bg="black" area={"main"} minHeight="100vh" h="auto" pb={20}>
          <Outlet />
        </GridItem>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
