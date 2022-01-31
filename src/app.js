
import AboutMe from "./components/aboutMe/aboutMe";
// import Buttons from "./components/buttons";
import ContactMe from "./components/contactMe/contactMe";
import IndvProject from "./components/contactMe/contactMe";
import Navbar from "./components/navbar/navbar";
import ProjectsList from "./components/projectsList/projectsList";
import "./app.css"
const app = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <ProjectsList>
        <IndvProject />
      </ProjectsList>
      <ContactMe />
    </div>
  );
};
export default app