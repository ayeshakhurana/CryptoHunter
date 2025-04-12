import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import Box from "@mui/material/Box";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "#14161a",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<Coinpage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
