import logo from './logo.svg';
import './App.css';
import Product from './Component/Product';
import Contact from './Component/Contact';
import About from './Component/About';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';



function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Product/>
    <Contact/>
    <About/>
    <Footer/>
    </>
  );
}

export default App;
