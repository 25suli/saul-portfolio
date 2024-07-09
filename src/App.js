import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import CV from './pages/CV';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/saul-portfolio/" element={<Home />} />
            <Route path="/saul-portfolio/about" element={<About />} />
            <Route path="/saul-portfolio/projects" element={<Projects />} />
            <Route path="/saul-portfolio/projects/:id" element={<ProjectDetails />} />
            <Route path="/saul-portfolio/cv" element={<CV />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
