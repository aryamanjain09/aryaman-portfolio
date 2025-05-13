
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">projects</h2>
      
      <div className="mb-3">
        <Link to="/serious-projects" className="block mb-2 underline">
          AI projects
        </Link>
        <p className="text-sm italic">all my AI, LLM, and agentic AI projects</p>
      </div>
      
      <div>
        <Link to="/fun-projects" className="block mb-2 underline">
          data science and ML projects
        </Link>
        <p className="text-sm italic">all my DS & ML projects</p>
      </div>
    </section>
  );
};

export default Projects;
