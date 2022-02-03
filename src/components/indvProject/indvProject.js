import { projectData } from "../../projectData";
//need to add .map to iterate over array of project objects and create individual cards for each to fit in parent div ProjectsList
const IndvProject = () => {
  return (
    <div className="card-body2">
      <div className="images">
        {projectData.map((info) => (
          <div className="card bg-primary">
            <img className="psuedo" src={info.image}></img>
            <a
              className="btn btn-dark btn-outline-info"
              href={info.live}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-light">{info.title}</h3>
            </a>
            <a
              className="btn btn-dark btn-outline-info text-light"
              href={info.github}
              target="_blank"
              rel="noreferrer"
            >Github Repo</a>
            <p className="text-light">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default IndvProject;
