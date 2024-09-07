"use client";

import { useState } from "react";

export function FilterProjects({
  onFilter,
}: {
  onFilter: (tech: string) => void;
}) {
  const technologies = [
    "All",
    "HTML",
    "CSS",
    "Bootstrap",
    "TailwindCSS",
    "JavaScript",
    "PHP",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Java",
  ];
  const [selectedTech, setSelectedTech] = useState<string>("All");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const tech = event.target.value;
    setSelectedTech(tech);
    onFilter(tech);
  };

  return (
    <div className="m-4 flex flex-col gap-4">
      <label htmlFor="tech-filter" className="text-lg text-primary font-mono font-semibold">
        Filter by Technology:
      </label>
      <select
        id="tech-filter"
        value={selectedTech}
        onChange={handleFilterChange}
        className="p-2 rounded-md btn-primary max-w-[140px] cursor-pointer"
      >
        {technologies.map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>
    </div>
  );
}
