"use client";
import { useState, useEffect } from "react";
import { projects } from "../constants/constants";
import { ProjectCard } from "./ProjectCard";
import { colorMap } from "../utils/collorMap";

export function ProjectsList({ filterTech }: { filterTech: string }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filterTech === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.technologies.includes(filterTech)
      );
      setFilteredProjects(filtered);
    }
  }, [filterTech]);


  const techColor = colorMap[filterTech] || "text-gray-500";

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              name={project.name}
              description={project.description}
              tags={project.tags}
              image={project.image}
              source_code_link={project.source_code_link}
              linkIcon={project.linkIcon}
            />
          ))
        ) : (
          <div className="container mx-auto my-12 col-span-full text-center ">
            <h2 className="text-2xl font-bold font-mono text-primary">Oops! 🚧</h2>
            <p className="mt-2 m-4 text-gray-400">
              I haven’t had the opportunity to explore <strong className={techColor}>{filterTech}</strong> just yet, but it's definitely on my radar for future projects.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
