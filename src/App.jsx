import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Footer />
    </div>
  );
}

export default App;
