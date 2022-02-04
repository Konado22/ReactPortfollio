//div containing the projects, projects flex boxed to properly fit within this div

import IndvProject from "../IndvProject/IndvProject";

const ProjectsList = () => {
  return (
    <div className="card bg-dark" id="Work" style={{ width: "100%" }}>
      <a href="#Work" className="card-link">
        <h5 className="title text-light bigger" id="moveWork">
          Work
        </h5>
      </a>
        <IndvProject />
    </div>
  );
};
export default ProjectsList;
