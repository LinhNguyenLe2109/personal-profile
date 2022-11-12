import './App.css';
import Navbar from './Components/Header/Navbar';
import Mainframe from './Components/Main/Mainframe'
import Introduction from './Components/Main/Introduction';
import AboutMe from './Components/Main/AboutMe';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Main/Skills';
import Experience from './Components/Main/Experience';

function App() {
  return (
    <div>
      <Navbar/>
      <Mainframe>
        <Introduction></Introduction>
        <AboutMe/>
        <Experience/>
        <Skills/>
      </Mainframe>
      <Footer/>
    </div>
  );
}

export default App;
