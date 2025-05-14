
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">projects</h2>
      
      <ul className="list-disc pl-5">
        <li className="mb-3">
          <Link to="/AIprojects" className="underline">
            AI projects
          </Link>
          {" : all my AI, LLM, and agentic AI projects"}
        </li>
        
        <li>
          <Link to="/DS&MLprojects" className="underline">
            data science and ML projects
          </Link>
          {" : all my DS & ML projects"}
        </li>
      </ul>
    </section>
  );
};

export default Projects;
