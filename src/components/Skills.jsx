import React from "react";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col py-16 bg-white dark:bg-black px-4"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-black dark:text-white">
          skills I have
        </h2>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Fade triggerOnce cascade damping={0.4}>
            {/* Languages */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-black dark:text-white">
                Languages
              </h3>
              <ul className="flex gap-x-4 gap-y-2 flex-wrap text-black dark:text-white">
                {["C++", "C", "JavaScript", "TypeScript"].map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-black dark:text-white">
                Frontend
              </h3>
              <ul className="flex gap-x-4 gap-y-2 flex-wrap text-black dark:text-white">
                {["React", "TailwindCSS", "HTML", "CSS"].map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-black dark:text-white">
                Backend
              </h3>
              <ul className="flex gap-x-4 gap-y-2 flex-wrap text-black dark:text-white">
                {["Node.js", "Express.js", "JWT", "Clerk"].map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-black dark:text-white">
                Databases
              </h3>
              <ul className="flex gap-x-4 gap-y-2 flex-wrap text-black dark:text-white">
                {["MongoDB"].map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>

            {/* Dev Tools & Platforms */}
            <div className="sm:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-black dark:text-white">
                Dev tools and Platforms
              </h3>
              <ul className="flex gap-x-4 gap-y-2 flex-wrap text-black dark:text-white">
                {["Git", "GitHub", "VS Code", "Postman"].map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Skills;
