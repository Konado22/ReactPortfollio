import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactMePage from "./pages/contactMePage";
import ExamplesOfWork from "./pages/examplesOfWork";
import AboutMePage from "./pages/aboutMepage";
import Homepage from "./pages/homepage";
import AppNavbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <AppNavbar />
      {/* < Homepage /> */}
      {/* <Router>
        <Routes>
          <Route exact path="/ReactPortfollio" element={<Homepage />} />
          <Route path="/aboutMe" element={<AboutMePage />} />
          <Route path="/work" element={<ExamplesOfWork />} />
          <Route
            path="/contactMe"
            element={<ContactMePage />}
          />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;