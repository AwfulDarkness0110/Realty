import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ListProperty from "./components/ListProperty";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SetPaymentToken from "./components/SetPaymentToken";
import Admin from "./components/Admin"
import Properties from "./components/Properties"

function App() {
  return (
    <Box
      px={{ base: "6", md: "16" }}
      fontFamily="'Poppins', sans-serif"
      bgColor="#FAFAFA"
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="set-payment-token" element={<SetPaymentToken />} />
          <Route path="list-property" element={<ListProperty />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
