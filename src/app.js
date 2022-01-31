import aboutMe from "./components/aboutMe";
import buttons from "./components/buttons";
import contactMe from "./components/contactMe";
import indvProject from "./components/contactMe";
import navbar from "./components/navbar";
import projectsList from "./components/projectsList";
import "./app.css"
const App = () => {
  return (
    <div>
      <navbar/>
      <aboutMe/>
      <projectsList>
        <indvProject/>
      </projectsList>
      <contactMe/>
    </div>
  );
};
export default App