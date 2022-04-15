import {Badge,Card} from 'react-bootstrap'

function Homepage() {
  return (
    < div style={{"backgroundColor":"aquamarine"}}>
      <div>
        <h4 style={{"fontFamily": "unset", "fontWeight": "bold"}}>Hi and welcome to my Portfollio!</h4>
        <br></br>
        <p style={{"lineHeight": "50px", "lineHeight": "80px", "fontSize": "30px"}}>
          Technology has always been facinating and a big part of my life. From
          building computers, to videogames, and a passion for coding I have spent
          some quality time around my computer. To learn more about me and my
          work please see below
        </p>
      </div>
      <div style={{"display":"flex","justifyContent":"center" }}>
      <Card bg="dark" style={{"display": "flex","paddingTop":"10px", "paddingBottom": "15px", "width": "100%"}}>
        <Card.Title style={{"color": "aquamarine"}}>Skills</Card.Title>
        <div style={{"width": "100%","display": "flex", "justifyContent": "space-evenly", "flexWrap": "wrap" }}>
        <Badge bg='warning'>React.js</Badge>
        <Badge bg='warning'>Javascript</Badge>
        <Badge bg='warning'> Express.js</Badge>
        <Badge bg='warning'> jQuerry</Badge>
        <Badge bg='warning'>Node.js</Badge>
        <Badge bg='primary'>HTML</Badge>
        <Badge bg='primary'>CSS</Badge>
        <Badge bg='primary'>SASS</Badge>
        <Badge bg='success'>MySQL</Badge>
        <Badge bg='success'>MongoDB</Badge>
        <Badge bg='success'>GraphQL</Badge>
        <Badge bg='info'>Heroku</Badge>
        <Badge bg='info'>Github</Badge>
        <Badge bg='info'>Apollo</Badge>
        <Badge bg='info'>REST</Badge>

        </div>
      </Card>

      </div>
    </div>
  );
}
export default Homepage;
