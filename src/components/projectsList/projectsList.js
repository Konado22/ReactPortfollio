//div containing the projects, projects flex boxed to properly fit within this div

import IndvProject from "../IndvProject/IndvProject";

const ProjectsList = () => {
  return (
    <div style={{ width: "100%" }}>
        <h5 className="title bigger" id="moveWork">
          Work
        </h5>
      <div className="card-body2">
        <IndvProject />
      </div>
    </div>
  );
};
export default ProjectsList;
