import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Cards from "../src/components/Cards/Cards"
import Cardsveg from "../src/components/Cardsveg/Cardsveg"
import Cardsstarters from "../src/components/Cardsstarters/Cardsstarters"
import Vegstarts from "../src/components/Vegstarts/Vegstarts"
import './App.css';
import Aboutus from './components/Aboutus/Aboutus';
import Features from './components/Featuers/Features'; 
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    <h1 id="NVB" className="heading">
    <span>N</span>
    <span>O</span>
    <span>N</span>
    <span>V</span>
    <span>E</span>
    <span>G</span>
    <span className="space"></span>
    <span>B</span>
    <span>I</span>
    <span>R</span>
    <span>Y</span>
    <span>A</span>
    <span>N</span>
    <span>Y</span>
    <span>S</span>
    
  </h1>
      <Cards/>
      <h1 id="NVS" className="heading">
    <span>N</span>
    <span>O</span>
    <span>N</span>
    <span>V</span>
    <span>E</span>
    <span>G</span>
    <span className="space"></span>
    <span>S</span>
    <span>T</span>
    <span>A</span>
    <span>R</span>
    <span>T</span>
    <span>E</span>
    <span>R</span>
    <span>S</span>
    
  </h1>
  <Cardsstarters/>

        <h1 id="VB" className="heading">
       
        <span>V</span>
        <span>E</span>
        <span>G</span>
        <span className="space"></span>
        <span>B</span>
        <span>I</span>
        <span>R</span>
        <span>Y</span>
        <span>A</span>
        <span>N</span>
        <span>Y</span>
        <span>S</span>
        
      </h1>
      <Cardsveg/>
      <h1 id="VS" className="heading">
    <span>V</span>
    <span>E</span>
    <span>G</span>
    <span className="space"></span>
    <span>S</span>
    <span>T</span>
    <span>A</span>
    <span>R</span>
    <span>T</span>
    <span>E</span>
    <span>R</span>
    <span>S</span>
    
    </h1>
    <Vegstarts/>
    <h1 id="Services" className="heading">
    <span>S</span>
    <span>E</span>
    <span>R</span>
    <span>V</span>
    <span>I</span>
    <span>C</span>
    <span>E</span>
    <span>S</span>
    </h1>
    <Aboutus/>
    
    <h1 id="Aboutus" className="heading">
    <span>A</span>
    <span>B</span>
    <span>O</span>
    <span>U</span>
    <span>T</span>
    <span className="space"></span>
    <span>U</span>
    <span>S</span>
    </h1>
    <Features/>
    <h1 id="Contact" className="heading">
    <span>C</span>
    <span>O</span>
    <span>N</span>
    <span>T</span>
    <span>A</span>
    <span>C</span>
    <span>T</span>
    <span className="space"></span>
    <span>U</span>
    <span>S</span>
    </h1>
    <Footer/>
      </div>
  );
}

export default App;
