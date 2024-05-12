

function Projects() {
  return (
    <div className="App">
      <AppHeader />
    </div>
  );
}

function AppHeader() {
  return (
    <div className="flex-container" >
      <h3>Projects</h3>

      <h4> Predictor of acceptances into post-secondary institutions</h4>
      Coming soon
      <h4>
        <a href="https://github.com/PurpleZenith/torch-solns" >
          Unofficial solutions to The Operations Research CHallenge (TORCH)
        </a>
      </h4>

    </div>
  )
}

export default Projects;
