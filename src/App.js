import './App.css';
import Navbar from './Components/Header/Navbar';
import Mainframe from './Components/Main/Mainframe'
import Introduction from './Components/Main/Introduction';
import Breaker from './Components/UI/Breaker'
import AboutMe from './Components/Main/AboutMe';
import FamiliarLanguages from './Components/Main/FamiliarLanguages';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Main/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Mainframe>
        <Introduction></Introduction>
        <AboutMe/>
        <Skills/>
        {/* <SectionBreaker/>
        <FamiliarLanguages/>  */}
        <Footer/>
      </Mainframe>
    </div>
  );
}

export default App;
