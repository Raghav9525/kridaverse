import React from "react";
import Form from "./components/Form";
import Form1 from "./components/Form1";
import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <BrowserRouter>
        <Navbar />
        <Dashboard />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
