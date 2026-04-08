import React from "react";
import AboutMe from "../components/AboutMe";
// import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary dark:bg-dark-primary text-primary dark:text-dark-primary scroll-smooth">
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <Hero />
      </section>

      {/* About */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <AboutMe />
      </section>

      {/* Experience */}
      {/*
      <section className="w-full max-w-7xl mx-auto px-4">
        <Experience />
      </section>
      */}

      {/* Skills */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <Skills />
      </section>

      {/* Projects */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <Projects />
      </section>
    </main>
  );
}
