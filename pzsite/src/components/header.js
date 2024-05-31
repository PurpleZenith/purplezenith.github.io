import { BrowserRouter, Routes, Route, HashRouter, Link } from "react-router-dom";
import About from "../pages/about"
import Blog from "../pages/blog";
import Home from "../pages/home";
import Projects from "../pages/projects";
function Header() {
    return (
        <div className="App">
            <Head />
        </div>
    );
}



function Head() {
    return (
        <HashRouter>
            <div className="Header-main" >
                <div className="Header-name">
                    <a
                        className="Header-name-link"
                        href="https://purplezenith.github.io/"
                    >
                        PurpleZenith's website
                    </a>
                </div>

                <div className="Header-div">
                    <a
                        className="Header-link"
                        href="https://purplezenith.github.io/"
                    >
                        home
                    </a>

                </div>
                <div className="Header-div">
                    <a
                        className="Header-link"
                        href="https://purplezenith.github.io/#/projects"
                    >
                        projects
                    </a>

                </div>
                <div className="Header-div">
                    <a
                        className="Header-link"
                        href="https://purplezenith.github.io/#/blog"
                    >
                        blog
                    </a>

                </div>
                <div className="Header-div">


                    <a
                        className="Header-link"
                        href="https://purplezenith.github.io/#/about"
                    >
                        about
                    </a>



                </div>
            </div>

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </HashRouter >


    )
}

export default Header;