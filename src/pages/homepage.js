import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";
import AppNavbar from "../components/Navbar/Navbar";
import ProjectsList from "../components/ProjectsList/ProjectsList";

function Homepage() {
  return (
    <>
    <div>
      <h1>Hi and welcome to my Portfollio!</h1>
      <h2>Technology has always been facinating and a big part of my life. From building computers, to videogames, and a passion for coding I spend some quality time around my computer. To learn more about me and my work please click above to navigate the page. </h2>
    </div>
    <div>
      <h1>This is where badges and maybe other pictures go (js, react, html, css, mongoDB, express, node, graphQL)(bootstrap, bulma)(herkou, gihub, apollo)</h1>
    </div>
      {/* <AboutMe />
      <ProjectsList />
      < ContactMe /> */}
    </>
  );
}
export default Homepage;