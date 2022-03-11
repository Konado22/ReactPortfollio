import { Card} from 'react-bootstrap'
function ContactMePage () {
    return(
        <>
        <h2 style={{"fontFamily": "sans-serif", "paddingLeft": "15px", "paddingRight": "15px"}}> Thank your for viewing my page! Use links below to contact me or see more examples of my work.</h2>
        <div style={{"paddingLeft": "15px", "paddingRight": "15px"}}>
        <Card>
            <Card.Title style={{"fontWeight":"bolder"}} >
                Resume
            </Card.Title>
            <a href='https://drive.google.com/file/d/18j-XFmZBthKhpjzTjVsYXH9E3t0NwSvD/view?usp=sharing'><Card.Text>Click here to access a pdf file of my resume</Card.Text></a>
        </Card>
        <Card>
            <Card.Title style={{"fontWeight":"bolder"}}>
                Cover Letter
            </Card.Title>
            <a href="https://drive.google.com/file/d/1D37s4MfBCI-M7z3rSdEJkE6o4jTDzK9M/view?usp=sharing"><Card.Text>Click here to access a pdf file of my Cover Letter </Card.Text></a>
        </Card>
        </div>
        </>
    )
};
export default ContactMePage;

 