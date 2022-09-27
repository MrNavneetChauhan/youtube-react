import { Box } from "@chakra-ui/react";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Routers } from "./routes/Routers";
function App() {
  return (
    <Box>
      <Navbar />
      <Routers/>
      <Footer/>
    </Box>
  );
}

export default App;
