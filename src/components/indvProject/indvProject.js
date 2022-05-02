import { projectData } from '../projectData';
import { Card, Button } from "react-bootstrap";
//need to add .map to iterate over array of project objects and create individual cards for each to fit in parent div ProjectsList
const IndvProject = () => {

  return projectData.map((item) => (
    <Card key={item.id} style={{textAlign: "center", maxWidth: "600px", paddingBottom: "20px",}}>
      <Card className="images">
        <Card style={{background:"linear-gradient(to right, grey, black)"}}>
          <img src={item.image} alt="" />
          <a href={item.live} target="_blank" rel="noreferrer">
            <Button variant="outline-light" style={{ width: "100%" }}>
              {item.title}
            </Button>
          </a>
          <a href={item.github} target="_blank" rel="noreferrer">
            <Button variant="outline-info" style={{ width: "100%" }}>
              Github Repo link
            </Button>
          </a>
          <Card.Subtitle
            style={{ display: "flex", alignItems: "center", paddingTop: "5px", "color": "white" }}
          >
            {item.description}
          </Card.Subtitle>
        </Card>
      </Card>
    </Card>
  ));
};
export default IndvProject;
