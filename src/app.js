import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactMePage from "./pages/contactMePage";
import ExamplesOfWork from "./pages/examplesOfWork";
import AboutMePage from "./pages/aboutMepage";
import Homepage from "./pages/homepage";
import { Navbar } from "react-bootstrap";
import AppNavbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Homepage />
      <Routes>
        <Route exact path="/" component={Homepage} />
        <Route path="#aboutMe" component={AboutMePage} />
        <Route path="#work" component={ExamplesOfWork} />
        <Route path="#contactMe" component={ContactMePage} />
      </Routes>
    </Router>
  );
}

export default App;
