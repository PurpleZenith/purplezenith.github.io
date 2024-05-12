
function Header() {
    return (
        <div className="App">
            <Head />
        </div>
    );
}



function Head() {
    return (
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
                    href="https://purplezenith.github.io/projects"
                >
                    projects
                </a>

            </div>
            <div className="Header-div">
                <a
                    className="Header-link"
                    href="https://purplezenith.github.io/blog"
                >
                    blog
                </a>

            </div>
            <div className="Header-div">
                <a
                    className="Header-link"
                    href="https://purplezenith.github.io/about"
                >
                    about
                </a>

            </div>
        </div>


    )
}

export default Header;