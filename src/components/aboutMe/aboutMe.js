import { Card } from "react-bootstrap";
const AboutMe = () => {
  return (
    <div>
      <Card
        style={{
          textDecoration: "none",
          paddingLeft: "20px",
          paddingRight: "20px",
          background: "linear-gradient(to right, #e66465, #9198e5)"          // "marginLeft": "15px",
          // "marginRight": "15px"
        }}
      >
        <Card.Title className="bigger">About Me</Card.Title>
        <Card.Text style={{"fontSize": "30px","fontFamily": "unset","lineHeight": "60px"}}>
          Hello My Name is Jesse Draper. I enjoy music, playing outside in the
          mountains, and spending time with my 6 year old son. I am a 28 year
          old student recently having completed a Full Stack Web Development
          course through the University Of Denver and currently pusuing my Bachelor of Computer Science at Southern New Hampshire University. Outside of building the foundation of coding This has
          been an important milestone in my life, as I have strongly desired a
          career change for some time and have always been interested in
          coding/web development. I have been able to gain exposure to many
          different web languages, frameworks, and understand their usage! Web
          development also compliments skills I have utilized in previous
          jobs in hospitality management. Some of these skills
          include problem solving, working with teams, coordinating projects, as
          well as managing my time effectively. I have really enjoyed the
          experiences I have gained and have provided some examples of the work
          I have completed in class or on my freetime. The list is continuosly
          updated with projects I feel most accuratley reflect my skills and
          interests.Feel free to navigate the page to see the deployed
          acitivities/respective github links. Please contact me for more
          information or how I can help your team today!
        </Card.Text>
      </Card>
    </div>
  );
};
export default AboutMe;
