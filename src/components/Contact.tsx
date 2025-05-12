
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">contact</h2>
      <div className="flex space-x-4">
        <a 
          href="https://www.linkedin.com/in/aryaman-jain-/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:underline"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/aryamanjain09" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:underline"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a 
          href="https://x.com/aryamanjain253" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:underline"
        >
          <Twitter size={20} />
          <span>X</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
