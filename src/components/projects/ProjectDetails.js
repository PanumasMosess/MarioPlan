import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quod
            hic dicta ipsam tempora voluptatum minima aliquam veritatis
            similique itaque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquam laboriosam animi voluptas eaque sunt tempore
            asperiores, ipsa alias est sint?
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Post By Mosez</div>
          <div>4th July, 6.17am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
