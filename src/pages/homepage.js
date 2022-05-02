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
          work please see below.
        </p>
      </div>
      <div style={{"display":"flex","justifyContent":"center" }}>
      <Card style={{background: "linear-gradient(to right, grey, black)","display": "flex","paddingTop":"10px", "paddingBottom": "15px", "width": "80%", justifyContent:"center"}}>
        <Card.Title style={{"color": "white",paddingLeft: "20px"}}>Skills</Card.Title>
        <div style={{"width": "100%",display: "flex", justifyContent: "space-evenly", "flexWrap": "wrap", alignItems: "center",}}>
        <Badge  className="hovBtn" bg='warning'>React.js</Badge>
        <Badge  className="hovBtn" bg='warning'>Javascript</Badge>
        <Badge className="hovBtn"  bg='warning'> Express.js</Badge>
        <Badge className="hovBtn"  bg='warning'> jQuerry</Badge>
        <Badge className="hovBtn"  bg='warning'>Node.js</Badge>
        <Badge className="hovBtn" bg='primary'>HTML</Badge>
        <Badge className="hovBtn" bg='primary'>CSS</Badge>
        <Badge className="hovBtn" bg='primary'>SASS</Badge>
        <Badge className="hovBtn" bg='success'>MySQL</Badge>
        <Badge className="hovBtn" bg='success'>MongoDB</Badge>
        <Badge className="hovBtn" bg='success'>GraphQL</Badge>
        <Badge className="hovBtn" bg='info'>Heroku</Badge>
        <Badge className="hovBtn" bg='info'>Github</Badge>
        <Badge className="hovBtn" bg='info'>Apollo</Badge>
        <Badge className="hovBtn" bg='info'>REST</Badge>

        </div>
      </Card>

      </div>
    </div>
  );
}
export default Homepage;
