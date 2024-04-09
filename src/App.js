import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';
import About from './components/about'
import Services from './components/services'
import Tours from './components/tours'

function App() {
  return (
    // <div classNameName="App">
    // </div>
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
