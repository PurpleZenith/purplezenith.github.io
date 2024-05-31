import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import About from "./pages/about";
import Blog from "./pages/blog";
import Home from "./pages/home";
import Projects from "./pages/projects";

import Header from '../src/components/header';

function App() {
  return (
    <div className="wrapper">
      <Header />

    </div>
  );
}

export default App;
