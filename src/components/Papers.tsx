
import React from 'react';
import { Link } from 'react-router-dom';

const Papers = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">papers</h2>
      <div className="mb-4">
        <p>[P1][Survey][BTech Project]</p>
        <p>
          <Link to="/papers/data-poisoning" className="underline">
            A Comprehensive Survey of Data Poisoning Attacks and their Detection Techniques
          </Link>
        </p>
      </div>
      <div>
        <p>[P2][Workshop][Hopefully Conference]</p>
        <p>to be updated soon</p>
      </div>
    </section>
  );
};

export default Papers;
