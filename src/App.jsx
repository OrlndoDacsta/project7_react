import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DetailMenu from "./pages/DetailMenu";
import { useRoutes } from "react-router-dom";
import routeList from "./routes/routeList";

const App = () => {
  
  const element = useRoutes(routeList);
  return element
  // return (
    
  //   // <BrowserRouter>
  //   //   <Routes>
  //   //     <Route path="/" element={<Home />} />
  //   //     <Route path="/login" element={<Login />} />
  //   //     <Route path="/menu/:id" element={<DetailMenu />} />
  //   //   </Routes>
  //   // </BrowserRouter>
  // );
};

export default App;
