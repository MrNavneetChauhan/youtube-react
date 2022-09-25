import { Box } from "@chakra-ui/react";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
  return (
    <Box>
      <Navbar />
      <Home/>
      <Footer/>
    </Box>
  );
}

export default App;
