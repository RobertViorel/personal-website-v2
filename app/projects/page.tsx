"use client";

import { useState } from "react";
import { FilterProjects } from "../components/FilterProjects";
import { ProjectsList } from "../components/ProjectList";
import { StarsCanvas } from "../components/StarsCanvas";
import { HoloBall } from "../components/HoloBall";

export default function ProjectsPage() {
  const [filterTech, setFilterTech] = useState<string>("All");

  return (
    <div className="relative w-full overflow-auto">
      <StarsCanvas />
      <div className="relative container mx-auto z-10">
       <HoloBall />
        <FilterProjects onFilter={setFilterTech} />
        <ProjectsList filterTech={filterTech} />
      </div>
    </div>
  );
}
