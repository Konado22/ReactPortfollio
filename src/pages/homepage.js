import {Badge,Card} from 'react-bootstrap'

function Homepage() {
  return (
    < div style={{paddingLeft: "10px"}}>
      <div>
        <h5 style={{paddingLeft: "20px","fontFamily": "unset", "fontWeight": "bold"}}>Hi and welcome to my Portfollio!</h5>
        <br></br>
        <p style={{"paddingLeft": "20px" , "paddingRight": "20px" ,"lineHeight": "60px", "fontSize": "30px"}}>
          Technology has always been facinating and a major part of my life. From
          building computers, to videogames, and a passion for coding I have spent
          some quality time around my computer. To learn more about me and my
          work please see below. <br />Currently learning: GoLang
        </p>
      </div>
      <div style={{"display":"flex","justifyContent":"center",paddingBottom: "20px" }}>
      <Card style={{background: "linear-gradient(to right, grey, black)","display": "flex","paddingTop":"10px", "paddingBottom": "20px", "width": "80%", justifyContent:"center"}}>
        <Card.Title style={{"color": "white",paddingLeft: "20px"}}>Skills</Card.Title>
        <div style={{"width": "100%",display: "flex", justifyContent: "space-evenly", "flexWrap": "wrap", alignItems: "center",padding:'10px'}}>
        <Badge  className="hovBtn" bg='warning' style={{padding: "20px", margin:'10px'}}>React.js</Badge>
        <Badge  className="hovBtn" bg='warning' style={{padding: "20px", margin:'10px'}}>Javascript</Badge>
            <Badge  className="hovBtn" bg='warning' style={{padding: "20px", margin:'10px'}}>C++</Badge>
            <Badge  className="hovBtn" bg='warning' style={{padding: "20px", margin:'10px'}}>Java</Badge>
        <Badge  className="hovBtn" bg='warning' style={{padding: "20px", margin:'10px'}}>GoLang</Badge>
        <Badge className="hovBtn"  bg='warning' style={{padding: "20px", margin:'10px'}}> Express.js</Badge>
        <Badge className="hovBtn"  bg='warning' style={{padding: "20px", margin:'10px'}}> jQuerry</Badge>
        <Badge className="hovBtn"  bg='warning' style={{padding: "20px", margin:'10px'}}>Node.js</Badge>
        <Badge className="hovBtn" bg='primary' style={{padding: "20px", margin:'10px'}}>HTML</Badge>
        <Badge className="hovBtn" bg='primary' style={{padding: "20px", margin:'10px'}}>CSS</Badge>
        <Badge className="hovBtn" bg='primary' style={{padding: "20px", margin:'10px'}}>SASS</Badge>
        <Badge className="hovBtn" bg='success' style={{padding: "20px", margin:'10px'}}>MySQL</Badge>
        <Badge className="hovBtn" bg='success' style={{padding: "20px", margin:'10px'}}>MongoDB</Badge>
        <Badge className="hovBtn" bg='success' style={{padding: "20px", margin:'10px'}}>GraphQL</Badge>
        <Badge className="hovBtn" bg='info' style={{padding: "20px", margin:'10px'}}>Heroku</Badge>
        <Badge className="hovBtn" bg='info' style={{padding: "20px", margin:'10px'}}>Github</Badge>
        <Badge className="hovBtn" bg='info' style={{padding: "20px", margin:'10px'}}>Apollo</Badge>
        <Badge className="hovBtn" bg='info' style={{padding: "20px", margin:'10px'}}>REST</Badge>

        </div>
      </Card>

      </div>
    </div>
  );
}
export default Homepage;
