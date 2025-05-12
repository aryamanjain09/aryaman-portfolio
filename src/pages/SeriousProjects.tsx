
import React from 'react';
import { Link } from 'react-router-dom';

const SeriousProjects = () => {
  return (
    <div className="min-h-screen font-mono text-black bg-white p-4 md:p-8 lg:p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Serious Projects</h1>
      <p className="mb-4">This page will list all important projects.</p>
      <Link to="/" className="underline">back to home</Link>
    </div>
  );
};

export default SeriousProjects;
