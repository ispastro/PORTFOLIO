import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import BackgroundEffect from './components/ui/BackgroundEffect';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-dark-800 to-dark-900 text-gray-200 selection:bg-secondary-500 selection:text-dark-800">
      <BackgroundEffect />
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;