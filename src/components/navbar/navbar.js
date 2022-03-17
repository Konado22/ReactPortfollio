import { Navbar, Nav, Container} from "react-bootstrap";
import image from "../../assets/profile-pic.jpg"
import "./navbar.css"
const appNavbar = () => {
  return (
    <Navbar variant="dark" bg='dark' style={{"width": "100%","display":"flex", "alignItems": "flex-end", "flexWrap": "wrap" }} >
      <Container style={{"display":"flex", "justifyContent": "space-between","marginLeft": "5px"}}>
        <Navbar.Brand href="/ReactPortfollio/"><img src={image} alt=""></img></Navbar.Brand>
        <Navbar.Brand style={{"color":"white", "fontFamily": "revert", "color": "aquamarine"}}> Jesse Draper<br></br>Web Developer</Navbar.Brand>
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

