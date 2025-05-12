
import React from 'react';
import { Link } from 'react-router-dom';

const PapersDaily = () => {
  return (
    <div className="min-h-screen font-mono text-black bg-white p-4 md:p-8 lg:p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Papers Daily</h1>
      <p className="mb-4">This page will contain paper explanations.</p>
      <Link to="/" className="underline">back to home</Link>
    </div>
  );
};

export default PapersDaily;
