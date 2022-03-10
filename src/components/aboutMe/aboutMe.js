import { Card } from "react-bootstrap";
const AboutMe = () => {
  return (
    <div>
      <Card  bg="light" style={{ "text-decoration": "none", "paddingLeft": "10px", "paddingRight": "10px" }}>
        <Card.Title className="bigger">
          About Me
        </Card.Title>
        <Card.Text>
          Hello My Name is Jesse Draper. I am a 26 year old student recently
          having completed a Full Stack Web Development course through the
          University Of Denver. This has been an important milestone in my life,
          as I have strongly desired a career change for some time and have
          always been interested in coding/web development. During this course I
          have been able to gain exposure to many different web languages and understand their usage! Web development also meshes well with skills I utilized
          in previous jobs in hospitality and hospitality management. Some of
          these skills include problem solving, working with teams, coordinating
          projects, as well as managing my time effectively. I have really
          enjoyed the experiences I have gained and have provided some examples
          of the work I have completed below. The list is continuosly updated
          with projects I feel more accuratley reflect my skills and
          interests.Feel free to click them to see the deployed
          acitivities/respective github links. Please contact me for
          more information!
        </Card.Text>
      </Card>
    </div>
  );
};
export default AboutMe;
