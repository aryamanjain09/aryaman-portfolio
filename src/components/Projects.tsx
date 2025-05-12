
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">projects</h2>
      <ul className="list-disc pl-6">
        <li className="mb-2">
          <Link to="/serious-projects" className="underline">
            serious projects
          </Link>{" "}
          : all my important projects
        </li>
        <li className="mb-2">
          <Link to="/fun-projects" className="underline">
            fun projects
          </Link>{" "}
          : all my fun projects
        </li>
      </ul>
    </section>
  );
};

export default Projects;
