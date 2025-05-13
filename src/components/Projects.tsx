
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">projects</h2>
      
      <ul className="list-disc pl-5">
        <li className="mb-3">
          <Link to="/serious-projects" className="underline">
            AI projects
          </Link>
          {" : all my AI, LLM, and agentic AI projects"}
        </li>
        
        <li>
          <Link to="/fun-projects" className="underline">
            data science and ML projects
          </Link>
          {" : all my DS & ML projects"}
        </li>
      </ul>
    </section>
  );
};

export default Projects;
