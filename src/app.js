import "./App.css";
import AppNavbar from "./components/Navbar/Navbar";
import AboutMePage from "./pages/aboutMepage";
import ContactMePage from "./pages/contactMePage";
import ExamplesOfWork from "./pages/examplesOfWork";
import Homepage from "./pages/homepage";

function App() {
  return (
    <>
      <AppNavbar />
      < Homepage />
      < AboutMePage />
      < ExamplesOfWork />
      <ContactMePage />
    </>
  );
}

export default App;
