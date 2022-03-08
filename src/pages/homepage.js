import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";
import AppNavbar from "../components/Navbar/Navbar";
import ProjectsList from "../components/ProjectsList/ProjectsList";

function Homepage() {
  return (
    <>
      <AboutMe />
      <ProjectsList />
      < ContactMe />
    </>
  );
}
export default Homepage;