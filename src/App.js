import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/Nav';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Hero />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
