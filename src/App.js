import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AllCitiesPage from "./pages/AllCitiesPage";
import CityDetailsPage from "./pages/CityDetailsPage";
import HomeDetailPage from "./pages/HomeDetailPage";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const baseUrl = "https://unilife-server.herokuapp.com";

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage baseUrl={baseUrl} />}/>
          <Route path="/allcities" element={<AllCitiesPage baseUrl={baseUrl} />}/>
          <Route path="/citydetails" element={<CityDetailsPage />} />
          <Route path="/homedetail" element={<HomeDetailPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
