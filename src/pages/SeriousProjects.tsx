
import React from 'react';
import { Link } from 'react-router-dom';

const SeriousProjects = () => {
  return (
    <div className="min-h-screen font-mono text-black bg-[#FFBE98] p-4 md:p-8 lg:p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Projects</h1>
      
      <div className="mb-8 pl-4 border-l-2 border-gray-300">
        <h4 className="font-medium">
          <a 
            href="https://github.com/aryamanjain09/MultiPDFChatbot1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline"
          >
            DocuMind | MultiPDF GenAI Chat-bot
          </a>
        </h4>
        <ul className="list-disc pl-5 text-sm">
          <li>Built a memory-capable RAG chatbot that allows users to upload multiple pdf files and chat / run queries on them.</li>
          <li>Used Facebook AI similarity search (FAISS) as a vector database and implemented embedding-based retrieval to map user queries to the knowledge extracted from the PDFs.</li>
          <li>Langchain along with OpenAI APIs is used to create the data ingestion, processing, embedding, recovery and response generation pipeline.</li>
        </ul>
      </div>
      
      <Link to="/" className="underline">back to home</Link>
    </div>
  );
};

export default SeriousProjects;
