import React from "react";

const Blogs = () => {
  return (
    <section className="pt-16 py-16 bg-white dark:bg-black min-h-screen px-4">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
          Blogs Page
        </h1>

        <p className="text-sm sm:text-base text-black dark:text-white mt-4 max-w-2xl">
          Here you can read my latest blog posts!
        </p>
      </div>
    </section>
  );
};

export default Blogs;
