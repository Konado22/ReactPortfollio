import { Card} from 'react-bootstrap'
function ContactMePage () {
    return(
        <div style={{"backgroundColor":"aquamarine"}}>
        <p style={{"fontFamily": "sans-serif", "paddingLeft": "15px", "paddingRight": "15px", "lineHeight" : "60px", "fontSize": "30px"}}> Thank your for viewing my page! Use links below to contact me or see more examples of my work.</p>
        <div style={{"paddingLeft": "15px", "paddingRight": "15px", "paddingTop" :"10px"}}>
        <Card variant="dark" bg='dark' style={{"marginBottom" : "10px"}}>
            <Card.Title style={{"fontWeight":"bolder", "color": "whitesmoke"}} >
                Resume
            </Card.Title>
            <a href='https://docs.google.com/document/d/1-ixofLayRip4MJ5TJ3spMldObWDe2iyD0ghsbNvhKiw/edit?usp=sharing'><Card.Text style={{"color": "whitesmoke"}}>Click here to access a pdf file of my resume</Card.Text></a>
        </Card>
        <Card  bg='dark' >
            <Card.Title style={{"fontWeight":"bolder" ,"color": "whitesmoke"}}>
                Cover Letter
            </Card.Title >
            <a href="https://drive.google.com/file/d/1D37s4MfBCI-M7z3rSdEJkE6o4jTDzK9M/view?usp=sharing"><Card.Text style={{"color": "whitesmoke"}}>Click here to access a pdf file of my Cover Letter </Card.Text></a>
        </Card>
        </div>
        </div>
    )
};
export default ContactMePage;

 