
import React from 'react';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Papers from '@/components/Papers';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen font-mono text-black bg-white p-4 md:p-8 lg:p-12 max-w-3xl mx-auto">
      <Header />
      <Experience />
      <Projects />
      <Papers />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Index;
