import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-black pt-16">
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] gap-6 px-4">
        <Fade direction="up" triggerOnce cascade damping={0.4}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center text-black dark:text-white">
            Unnati Jaiswal
          </h1>

          <p className="text-center text-black dark:text-white max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            A developer, who loves building amazing web experiences.
          </p>

          <div className="flex gap-3 flex-wrap justify-center">
            <a href="mailto:unnati.jais06@gmail.com">
              <button className="bg-black text-white py-2 px-6 rounded dark:bg-white dark:text-black">
                Get in touch
              </button>
            </a>
            <a href="/UnnatiResume.pdf" target="_blank" rel="noreferrer">
              <button className="bg-black text-white py-2 px-8 rounded dark:bg-white dark:text-black">
                Resume
              </button>
            </a>
          </div>
        </Fade>

        <img
          src="/arrow-down.svg"
          alt="arrow"
          className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce mt-12 dark:invert"
        />
      </div>
    </section>
  );
};

export default Hero;
