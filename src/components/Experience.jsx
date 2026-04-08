import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col py-16 bg-white dark:bg-black px-4"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-10">
          My Work Experience
        </h2>

        <p className="text-lg sm:text-xl text-black dark:text-white">
          Working.....
        </p>

        {/*
        <div className="flex flex-col gap-10 mt-10">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
                Frontend Intern
              </h3>
              <p className="font-semibold text-black dark:text-white">
                March 2024 - Present
              </p>
            </div>
            <p className="text-black dark:text-white">
              Sumatak Technologies
            </p>
            <ul className="list-disc list-inside mt-3 text-black dark:text-white flex flex-col gap-3">
              <li>
                Engineered a Chrome extension with React, TypeScript, and Vite to
                evaluate website risk scores...
              </li>
              <li>
                Implemented various LLM-based chatbots using Chainlit and
                Langchain...
              </li>
              <li>
                Created a web application for document signing with
                certificates...
              </li>
            </ul>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default Experience;
