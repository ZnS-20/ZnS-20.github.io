import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import SourceCode from "./Components/SourceCode";
import Projects from "./Components/Projects";
import './App.css';

function App() {
  const childToParent = (childdata) => {
    const violation = document.getElementById(childdata);
    window.scrollTo({
      top: violation.offsetTop,
      behavior: "smooth"
    });
  }

  const childToParents = (childdata) => {
    const violation = document.getElementById(childdata);
    window.scrollTo({
      top: violation.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <div className="App">
      {/* <h1>Creating my Portfolio. Hope I can complete this and start freelancing to earn more bucks.</h1> */}
      <Navbar childToParent={childToParent} />
      <div id='about'>
        <About />
      </div>
      <div>
        <Projects />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <div id='project'>
        <SourceCode />
      </div>
      <Footer childToParents={childToParents} />
    </div>
  );
}

export default App;