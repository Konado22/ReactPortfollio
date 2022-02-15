import {projectData} from "../../projectData"
//need to add .map to iterate over array of project objects and create individual cards for each to fit in parent div ProjectsList
const IndvProject = () => {
    return (projectData.map((item) => (
        <div key={item.id}>
        <div className="images">
            <div className="card bg-primary">
                <img className="psuedo" src="{item.image}" alt=""></img>
                <a className="btn btn-dark btn-outline-info" href={item.live}
                    target="_blank" rel="noreferrer">
                    <h3 className="text-light">{item.title}</h3>
                </a>
                <a className="btn btn-dark btn-outline-info text-light" href={item.github}
                    target="_blank" rel="noreferrer">Github Repo link
                   </a>
                <p className="text-light">{item.description}</p>
        </div>
</div>

      </div>

    ))
    )
  }
  export default IndvProject;
