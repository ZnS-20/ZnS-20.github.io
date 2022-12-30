import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import SourceCode from "./Components/SourceCode";

function App() {
  return (
    <div className="App">
      {/* <h1>Creating my Portfolio. Hope I can complete this and start freelancing to earn more bucks.</h1> */}
      <Navbar />
      <About />
      <Contact />
      <SourceCode />
      <Footer />
    </div>
  );
}

export default App;