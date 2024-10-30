import React from 'react';
import { ArrowRight, Code2, Zap, Workflow, Github } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;