import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import UserHome from "./pages/userHome";
import MainNavbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <MainNavbar />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/userHome" element={<UserHome />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
