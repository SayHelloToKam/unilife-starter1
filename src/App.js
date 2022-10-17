import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  const baseUrl = "https://unilife-server.herokuapp.com";

  return (
    <div>
      <Header />
      <HomePage baseUrl={baseUrl} />
      <Footer />
    </div>
  );
}

export default App;
