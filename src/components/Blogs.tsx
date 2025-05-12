
import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">blogs</h2>
      <ul className="list-disc pl-6">
        <li className="mb-2">
          <Link to="/technical-blogs" className="underline">
            technical blogs
          </Link>{" "}
          : all my blogs about machine learning
        </li>
        <li className="mb-2">
          <Link to="/guides" className="underline">
            guides
          </Link>{" "}
          : all my blogs on experiences
        </li>
        <li className="mb-2">
          <Link to="https://youtube.com/@neuralnets" className="underline">
            my youtube channel
          </Link>{" "}
          : i teach everything related to GATE DA
        </li>
        <li className="mb-2">
          <Link to="https://twitter.com/neuralnets" className="underline">
            twitter threads
          </Link>{" "}
          : some knowledgeable threads i wrote
        </li>
        <li className="mb-2">
          <Link to="/papers-daily" className="underline">
            papers daily
          </Link>{" "}
          : paper explanations by me
        </li>
      </ul>
    </section>
  );
};

export default Blogs;
