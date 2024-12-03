"use client";

import { useState } from "react";
import { FilterProjects } from "../components/FilterProjects";
import { ProjectsList } from "../components/ProjectList";
import { StarsCanvas } from "../components/StarsCanvas";

export default function ProjectsPage() {
  const [filterTech, setFilterTech] = useState<string>("All");

  return (
    <div className="relative w-full h-full overflow-auto">
      <StarsCanvas />
      <div className="relative container mx-auto z-10 mt-20">
        <FilterProjects onFilter={setFilterTech} />
        <ProjectsList filterTech={filterTech} />
      </div>
    </div>
  );
}
