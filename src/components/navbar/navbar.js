import { Navbar, Nav, Container} from "react-bootstrap";
import image from "../assets/profile-pic.jpg"
import "./navbar.css"
const appNavbar = () => {
  return (
    <Navbar style={{background: "linear-gradient(to right, grey, black)", width: "100%",display:"flex", alignItems: "flex-end", "flexWrap": "wrap" }} >
      <Container style={{display:"flex", justifyContent: "space-between",marginLeft: "5px"}}>
        <Navbar.Brand href="/ReactPortfollio/"><img src={image} alt=""></img></Navbar.Brand>
        <Navbar.Brand style={{fontWeight: "20px","color":"white", "fontFamily": "revert"}}> Jesse Draper<br></br>Web Developer</Navbar.Brand>
      </Container>
      {/* <Nav fixed="bottom" bg='dark' style={{"display":"flex", "justifyContent": "right", "alignItems": "end"}}> */}
        {/* <Nav.Link href="/ReactPortfollio/aboutMe">About Me</Nav.Link>
        <Nav.Link href="/ReactPortfollio/work">Work</Nav.Link>
        <Nav.Link href="/ReactPortfollio/contactMe">Contact Me</Nav.Link> */}
      {/* </Nav> */}
    </Navbar>
  );
};
export default appNavbar;

