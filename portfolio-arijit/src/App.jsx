// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Outlets from './global/Outlets';
 import './App.css';
 import Home from './pages/Home';
 import About from './pages/About';
 import Projects from './pages/Projects';
 import Github from './pages/Github';

function App() {
  return (
    <Router>
      {/* <h1>Routes</h1> */}
      <div className="app">
        <Outlets />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/github" element={<Github />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;