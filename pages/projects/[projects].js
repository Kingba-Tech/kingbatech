import React from 'react';
import { projects } from '../api/projects';

const paths = projects.map((project) => ({
  params: { projectslug: project.slug },
}));

const Project = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h1>{project.name}</h1>
          <h6>{project.description}</h6>
        </div>
      ))}
    </div>
  );
};

export default Project;
