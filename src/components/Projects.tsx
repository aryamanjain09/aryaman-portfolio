
import React from 'react';

const Projects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">projects</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">AI projects</h3>
        <p className="mb-2 text-sm italic">all my AI, LLM, and agentic AI projects</p>
        
        <div className="mb-4 pl-4 border-l-2 border-gray-300">
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
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">data science and ML projects</h3>
        <p className="mb-2 text-sm italic">all my DS & ML projects</p>
        
        <div className="mb-4 pl-4 border-l-2 border-gray-300">
          <h4 className="font-medium">
            <a 
              href="https://github.com/aryamanjain09/Bird_Sound_Classifier_using_Neural_Networks" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline"
            >
              Chirpify | Bird Sound Classifier
            </a>
          </h4>
          <ul className="list-disc pl-5 text-sm">
            <li>Built an audio classification model to detect the species a bird belongs to, by processing its sound.</li>
            <li>Tested various deep learning models such as, SVM, ANN, CNN and selected one with best results.</li>
            <li>Used specialized audio features including Mel Frequency Cepstral Coefficients to work with .wav files.</li>
          </ul>
        </div>
        
        <div className="pl-4 border-l-2 border-gray-300">
          <h4 className="font-medium">
            <a 
              href="https://github.com/aryamanjain09/customer-segmentation-model-for-credit-card-holders/blob/main/Credit%20Card%20Customer%20Segmentation/customer%20segmentation%20using%20clustering.ipynb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline"
            >
              Customer Segmentation of credit card users
            </a>
          </h4>
          <ul className="list-disc pl-5 text-sm">
            <li>Analyzed data of 9000+ credit card users to profile users into clusters and suggest marketing approach for each cluster.</li>
            <li>Used unsupervised learning techniques to find appropriate clustering technique.</li>
            <li>Evaluated results from K-means, DBSCAN, Agglomerative clustering on 3 metric score – Silhouette, Davies-Bouldin Index, Calinski-Harabasz Index to find most appropriate clustering of dataset.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
