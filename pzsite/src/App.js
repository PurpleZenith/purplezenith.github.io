import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Blog from "./pages/blog";
import Home from "./pages/home";
import Projects from "./pages/projects";

import Header from '../src/components/header';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
