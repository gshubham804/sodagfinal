import logo from './logo.svg';
import './App.css';
import Product from './Component/Product';
import Contact from './Component/Contact';
import About from './Component/About';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Header from './Component/Header'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <>
    
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
           <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Contact" element={<Contact />} /> 
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
