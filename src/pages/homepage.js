import {Badge,Card} from 'react-bootstrap'

function Homepage() {
  return (
    <>
      <div>
        <h3 style={{"fontFamily": "unset", "fontWeight": "bold"}}>Hi and welcome to my Portfollio!</h3>
        <h4 style={{"lineHeight": "50px"}}>
          Technology has always been facinating and a big part of my life. From
          building computers, to videogames, and a passion for coding I have spent
          some quality time around my computer. To learn more about me and my
          work please see below
        </h4>
      </div>
      <div style={{"display":"flex","justifyContent":"center" }}>
      <Card bg="dark" style={{"display": "flex","paddingTop":"10px", "paddingBottom": "15px", "width": "100%"}}>
        <Card.Title style={{"color": "white"}}>Skills</Card.Title>
        <Badge bg='warning'>React.js</Badge>
        <Badge bg='warning'>Javascript</Badge>
        <Badge bg='warning'> Express.js</Badge>
        <Badge bg='warning'>Node.js</Badge>
        <Badge bg='primary'> HTML</Badge>
        <Badge bg='primary'>CSS</Badge>
        <Badge bg='success'>MySQL</Badge>
        <Badge bg='success'>MongoDB</Badge>
        <Badge bg='success'>GraphQL</Badge>
        <Badge bg='info'>Heroku</Badge>
        <Badge bg='info'>Github</Badge>
      </Card>

      </div>
    </>
  );
}
export default Homepage;
