import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero'
import Aboutme from './Components/aboutme';
import Skills from './Components/skills'
import Footer from './Components/Footer';
function App() {
  return (
    <html>
      <head></head>
      <main class=" bg-gray-300">
          <Hero/>
          <Aboutme/>
          <Skills/>
          <Footer/>
      </main>
    </html>

  );
}

export default App;
