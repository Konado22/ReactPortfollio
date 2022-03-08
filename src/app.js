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
        <Route exact path="/ReactPortfollio/" component={Homepage} />
        <Route path="ReactPortfollio/#aboutMe" component={AboutMePage} />
        <Route path="ReactPortfollio/#work" component={ExamplesOfWork} />
        <Route path="ReactPortfollio/#contactMe" component={ContactMePage} />
      </Routes>
    </Router>
  );
}

export default App;
