import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';

import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
