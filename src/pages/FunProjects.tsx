
import React from 'react';
import { Link } from 'react-router-dom';

const FunProjects = () => {
  return (
    <div className="min-h-screen font-mono text-black bg-[#FFEDDB] p-4 md:p-8 lg:p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Data Science and ML Projects</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          <a 
            href="https://github.com/aryamanjain09/Bird_Sound_Classifier_using_Neural_Networks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline"
          >
            Chirpify | Bird Sound Classifier
          </a>
        </h2>
        <ul className="list-disc pl-5">
          <li className="mb-1">Built an audio classification model to detect the species a bird belongs to, by processing its sound.</li>
          <li className="mb-1">Tested various deep learning models such as, SVM, ANN, CNN and selected one with best results.</li>
          <li>Used specialized audio features including Mel Frequency Cepstral Coefficients to work with .wav files.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          <a 
            href="https://github.com/aryamanjain09/customer-segmentation-model-for-credit-card-holders/blob/main/Credit%20Card%20Customer%20Segmentation/customer%20segmentation%20using%20clustering.ipynb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline"
          >
            Customer Segmentation of credit card users
          </a>
        </h2>
        <ul className="list-disc pl-5">
          <li className="mb-1">Analyzed data of 9000+ credit card users to profile users into clusters and suggest marketing approach for each cluster.</li>
          <li className="mb-1">Used unsupervised learning techniques to find appropriate clustering technique.</li>
          <li>Evaluated results from K-means, DBSCAN, Agglomerative clustering on 3 metric score – Silhouette, Davies-Bouldin Index, Calinski-Harabasz Index to find most appropriate clustering of dataset.</li>
        </ul>
      </div>
      
      <Link to="/" className="underline">back to home</Link>
    </div>
  );
};

export default FunProjects;
