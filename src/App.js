import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Projects from "./pages/Projects";
import Project from "./pages/Project123";
import Contacts from "./pages/Contacts";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
