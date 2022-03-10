import { Navbar, Nav, Container} from "react-bootstrap";
import image from "../../assets/profile-pic.jpg"
const appNavbar = () => {
  return (
    <Navbar variant="dark" bg='dark' style={{"width": "100%","display":"flex", "alignItems": "flex-end"}} >
      <Container style={{"display":"flex", "justifyContent": "left","marginLeft": "5px"}}>
        <Navbar.Brand href="/ReactPortfollio"><img src={image}></img></Navbar.Brand>
        <Navbar.Brand style={{"color":"white", "fontFamily": "revert"}}> Jesse Draper<br></br>Web Developer</Navbar.Brand>
      </Container>
      <Nav fixed="bottom" bg='dark' style={{"display":"flex", "justifyContent": "right", "alignItems": "end"}}>
        <Nav.Link href="/aboutMe">About Me</Nav.Link>
        <Nav.Link href="/work">Work</Nav.Link>
        <Nav.Link href="/contactMe">Contact Me</Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default appNavbar;

