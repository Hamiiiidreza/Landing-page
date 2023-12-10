import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Aboutus from './Components/About us/Aboutus';
import Slider from './Components/Slider/Slider';
import Features from './Components/Features/Features';
import Services from './Components/Services/Services';
import Invitation from './Components/Invitation/Invitation';
import Portfolio from './Components/Portfolio/Portfolio';
import Statistics from './Components/Statistics/Statistics';
import Members from './Components/Members/Members';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/Scroll/Scroll';

function App() {
  return (
    <div>
       <Header/>
       <Aboutus />
       <Slider />
       <Features />
       <Services />
       <Invitation />
       <Portfolio />
       <Statistics />
       <Members />
       <Team />
       <Contact />
       <Footer />
       <Scroll />
    </div>
  );
}

export default App;
