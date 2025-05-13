
import React from 'react';
import { Link } from 'react-router-dom';

const SeriousProjects = () => {
  return (
    <div className="min-h-screen font-mono text-black bg-[#FFFDD0] p-4 md:p-8 lg:p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Projects</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          <a 
            href="https://github.com/aryamanjain09/MultiPDFChatbot1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline"
          >
            DocuMind | MultiPDF GenAI Chat-bot
          </a>
        </h2>
        <ul className="list-disc pl-5">
          <li className="mb-1">Built a memory-capable RAG chatbot that allows users to upload multiple pdf files and chat / run queries on them.</li>
          <li className="mb-1">Used Facebook AI similarity search (FAISS) as a vector database and implemented embedding-based retrieval to map user queries to the knowledge extracted from the PDFs.</li>
          <li>Langchain along with OpenAI APIs is used to create the data ingestion, processing, embedding, recovery and response generation pipeline.</li>
        </ul>
      </div>
      
      <Link to="/" className="underline">back to home</Link>
    </div>
  );
};

export default SeriousProjects;
