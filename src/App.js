import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import './App.css';

import Navbar from './components/Navbar';
//import Login from './components/Login';
//import Slider from './components/Slider';
import HelpBox from './components/HelpBox';
import Card from './components/Card';
import OtherSlider from './components/NavCss/OtherSlider';
import VideoLink from "./components/VideoLink";


//import { CardData } from './components/CardData'


//import ImageSlider from './components/ImageSlider';
//import { SliderData } from './components/SliderData';
import './components/LoginCss.css';
import './components/NavCss/HelpBox.css';

import './components/NavCss/CardDes.css';
import CardDes from "./components/CardDes";
import "./components/NavCss/VideoL.css";
import FooterAbout from "./components/FooterAbout";
import FooterInfo from "./components/FooterStuff/FooterInfo";
import "./components/FooterStuff/FooterInf.css"




function App() {
  return (

    <>


      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<><OtherSlider /><br /><br /><HelpBox /><Card /><br /><VideoLink /><br /><br /><br/><br /><FooterAbout/></>}/>
          <Route path="/card/:id" element={<CardDes/>}/>
          <Route path="/about" element={<FooterInfo/>}/>
        </Routes>
      </Router>





      {/* <Navbar />
      <OtherSlider />
      <br />
      <br />
      <HelpBox />
      <Card /> 
      */}


      {/* <ImageSlider slides={SliderData}/>  */}
    </>









  );
}


export default App;
