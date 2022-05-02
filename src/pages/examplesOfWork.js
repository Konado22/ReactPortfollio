import ProjectsList from "../components/ProjectsList/ProjectsList";

function ExamplesOfWork () {
    return(
        <div style={{background: "linear-gradient(to right, #e66465, #9198e5)"}}>
        <div style={{"paddingLeft": "15px", "paddingRight": "15px"}}>
            <h3 style={{"fontFamily": "unset","fontSize": "30px", "lineHeight": "60px", paddingLeft:"20px", paddingRight:"20px"}}>Below you will find examples of work from my Github. These are some of my favorite/most proud projects completed by myself and with teamates. Please follow the links to see live deployed applications or walkthrough videos of the projects!</h3>
        </div>
        <ProjectsList /> 
        </div>
    )
}
export default ExamplesOfWork;