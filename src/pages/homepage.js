import {Badge} from 'react-bootstrap'

function Homepage() {
  return (
    <>
      <div>
        <h1>Hi and welcome to my Portfollio!</h1>
        <h2>
          Technology has always been facinating and a big part of my life. From
          building computers, to videogames, and a passion for coding I have spent
          some quality time around my computer. To learn more about me and my
          work please click above to navigate the page.
        </h2>
      </div>
      <div>
        <Badge bg='warning'>React.js</Badge>
        <Badge bg='warning'>Javascript</Badge>
        <Badge bg='warning'> Express.js</Badge>
        <Badge bg='warning'>Node.js</Badge>
        <Badge bg='primary'> HTML</Badge>
        <Badge bg='primary'>CSS</Badge>
        <Badge bg='success'>MySQL</Badge>
        <Badge bg='success'>MongoDB</Badge>
        <Badge bg='success'>GraphQL</Badge>
        <Badge bg='success'>MySQL</Badge>
        <Badge bg='info'>Heroku</Badge>
        <Badge bg='info'>Github</Badge>
      </div>
    </>
  );
}
export default Homepage;
