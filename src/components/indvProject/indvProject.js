import {projectData} from "../../projectData"
//need to add .map to iterate over array of project objects and create individual cards for each to fit in parent div ProjectsList
const IndvProject = ({title, image, github,live,description}) => {
    return (
        <div className="card-body2">
        <div className="images">
            <div className="card bg-primary">
                <img className="psuedo" src={image} alt=""></img>
                <a className="btn btn-dark btn-outline-info" href={live}
                    target="_blank" rel="noreferrer">
                    <h3 className="text-light">{title}</h3>
                </a>
                <a className="btn btn-dark btn-outline-info text-light" href={github}
                    target="_blank" rel="noreferrer">
                   </a>
                <p className="text-light">{description}</p>
            </div>
        </div>
</div>
    )
}
export default IndvProject;