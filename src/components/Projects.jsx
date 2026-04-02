import React from "react";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const projects = [
    {
      name: "Portfolio Website",
      unfinished: false,
      description:
        "A modern and visually engaging personal portfolio website showcasing my professional journey, technical skills, and creative projects. Built with React and Tailwind CSS, it features smooth animations, interactive components, and well-structured sections for skills, projects, and achievements. Deployed on Vercel for fast performance and global reach.",
      techStack: ["React", "Tailwind CSS"],
      github: "",
      website: "",
    },
    /*{
      name: "UNI TASK HUB (In Development)",
      unfinished: true,
      description:
        "A Role-Based Authentication System (RBAC) is a way to control who can access what in an application based on their role (like Admin, User, Manager, etc.)"
      techStack: ["React", " Authentication", "Node.js", "MongoDB"],
      github: "",
      website: "",/
    },
   /* {
      name: "classicSnake",
      unfinished: false,
      description:
        "snake.69 is a Snake game built in C using the ncurses library for terminal graphics and input handling. Control the snake, eat food, and avoid collisions. A fun project to practice C programming, game logic, and explore ncurses for enhanced terminal-based user interfaces.",
      techStack: ["C", "Ncurses"],
      github: "https://github.com/kushagramodanwal/classicsnake",
      website: "",
    },
    {
      name: "SoloPlay",
      unfinished: false,
      description:
        "Developed a JavaScript Chrome extension that ensures only one YouTube video plays at a time across all browser tabs, preventing overlapping audio. Leveraged service workers for seamless background synchronization and handled YouTube’s dynamic single-page application navigation. Implemented automatic playback switching between tabs to improve user experience and optimize browser resource usage.",
      techStack: ["JavaScript", "Chrome Extension"],
      github: "https://github.com/kushagramodanwal/soloplay",
      website: "",
    },*/
  ];

  return (
    <section
      id="projects"
      className="flex flex-col py-16 bg-white dark:bg-black px-4"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
          my projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-8 gap-8">
          <Fade triggerOnce cascade damping={0.4}>
            {projects.map((project) => (
              <div
                key={project.name}
                className="p-6 sm:p-8 flex flex-col gap-4 border-2 border-black dark:border-white shadow rounded"
              >
                <div className="flex w-full gap-4 items-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white break-words">
                    {project.name}
                  </h3>

                  {project.github && (
                    <a
                      href={project.github}
                      className="ml-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/github.svg"
                        width={30}
                        height={30}
                        alt="GitHub repository"
                        className="hover:scale-125 transition-all duration-150 dark:invert"
                      />
                    </a>
                  )}

                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/link.svg"
                        width={30}
                        height={30}
                        alt="Live project"
                        className="hover:scale-125 transition-all duration-150 dark:invert"
                      />
                    </a>
                  )}
                </div>

                <p className="text-sm sm:text-base text-black dark:text-white leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-x-4 flex-wrap mt-2">
                  {project.techStack.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-semibold text-black dark:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Fade>
        </div>

        <div className="flex justify-center w-full">
          <a
            href="https://github.com/unnatijais04"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-black text-white py-2 px-8 rounded mt-10 dark:bg-white dark:text-black">
              More projects
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
