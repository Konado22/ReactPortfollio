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
    <>
      <AppNavbar />
      <Router>
        <Routes>
          <Route exact path="/ReactPortfollio/" element={<Homepage />}>
            {/* <Homepage /> */}
          </Route>
          <Route path="/ReactPortfollio/aboutMe" element={<AboutMePage />} />
          <Route path="/ReactPortfollio/work" element={<ExamplesOfWork />} />
          <Route
            path="/ReactPortfollio/contactMe"
            element={<ContactMePage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
