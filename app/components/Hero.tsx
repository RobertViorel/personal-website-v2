"use client";


export function Hero() {
  return (
    <section className="container mx-auto flex flex-col justify-center items-start min-h-screen px-4 md:px-8 overflow-hidden">
      <p className="text-[#D0B870] font-mono text-lg sm:text-xl">
        Hi, my name is
      </p>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary mt-2 sm:mt-4">
        Robert Dumitru.
      </h1>
      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-400 mt-1 sm:mt-2">
        I build things for the web.
      </h2>
      <p className="text-gray-400 max-w-sm sm:max-w-md md:max-w-xl mt-2 sm:mt-4">
        Hi there! I&apos;m Robert, a passionate junior web developer on a journey to
        turn my coding dreams into reality. With a keen eye for design and a
        love for solving problems, I am currently delving deep into the world of
        web development, continuously expanding my skill set and exploring the
        latest technologies.
      </p>
      <a
        href="/projects"
        className="mt-4 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 border border-[#D0B870] text-[#D0B870] hover:bg-[#D0B870] hover:text-white transition-colors duration-300 rounded-md text-sm sm:text-base"
        role="button"
        aria-label="Check out my projects"
      >
        Check out my projects!
      </a>
    </section>
  );
}
