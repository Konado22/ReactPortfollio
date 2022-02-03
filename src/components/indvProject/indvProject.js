import {projectData} from ""
//need to add .map to iterate over array of project objects and create individual cards for each to fit in parent div ProjectsList
const Project = ({title, github, deployed, description})
const IndvProject = () => {
    return (
        <div className="card-body2">
        <div className="images">
            <div className="card bg-primary">
                <img className="psuedo" src=""></img>
                <a className="btn btn-dark btn-outline-info" href=""
                    target="_blank" rel="noreferrer">
                    <h3 className="text-light"></h3>
                </a>
                <a className="btn btn-dark btn-outline-info text-light" href=""
                    target="_blank" rel="noreferrer">
                   </a>
                <p className="text-light"></p>
            </div>
        </div>
</div>
    )
}
export default IndvProject;