  
import React from 'react'
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter , Route,Routes } from "react-router-dom";
import MyPatients from './screens/MyPatients/MyPatients';

const App = () => (
  <BrowserRouter>
  <Header />
    <main className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/patients" element={<MyPatients/>}  />
      </Routes>
      
  </main>
  <Footer />
</BrowserRouter>

);

export default App;
