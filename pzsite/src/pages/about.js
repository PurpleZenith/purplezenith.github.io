

function About() {
  return (
    <div className="App">
      <AppHeader />
    </div>
  );
}

function AppHeader() {
  return (
    <div className="flex-container" >
      <h3> About </h3>
      <ul>
        <li>BASc Management (Industrial) Engineering, Co-op (University of Waterloo)</li>
        <li>Most of my work is in Software Development, focusing on Backend and DevOps work </li>
      </ul>
      <h3> Interests </h3>
      <ul>
        <li>Software Design (generally speaking)</li>
        <li>ML and MLOps</li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Management_science/"
          >Management Science
          </a>
        </li>
      </ul>
    </div>


  )
}

export default About;
