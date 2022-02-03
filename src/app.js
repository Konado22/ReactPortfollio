import AboutMe from "./components/AboutMe/AboutMe";
// import Buttons from "./components/buttons";
import ContactMe from "./components/ContactMe/ContactMe";
// import IndvProject from "./components/ContactMe/ContactMe";
import Navbar from "./components/Navbar/Navbar";
import ProjectsList from "./components/ProjectsList/ProjectsList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <AboutMe />
        <ProjectsList />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
