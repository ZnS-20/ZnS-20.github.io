import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      {/* <h1>Creating my Portfolio. Hope I can complete this and start freelancing to earn more bucks.</h1> */}
      <Navbar />
      <div id="div">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;