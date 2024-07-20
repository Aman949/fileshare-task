// components/ProjectsNavigation.jsx
"use client";
import Image from "next/image";
import { useState } from "react";

const projects = [
  { id: "project1", title: "Project 1" },
  { id: "project2", title: "Project 2" },
  { id: "project3", title: "Project 3" },
  { id: "project4", title: "Project 4" },
];

const ProjectsNavigation = () => {
  const [activeProject, setActiveProject] = useState("project1");

  return (
    <div className="container mx-auto">
      <nav className="flex space-x-4 font-semibold">
        {projects.map((project) => (
          <button
            key={project.id}
            className={`py-2 px-4 ${
              activeProject === project.id
                ? "text-yellow-500 border-b-2 border-yellow-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveProject(project.id)}
          >
            {project.title}
          </button>
        ))}
      </nav>

      <div className="mt-8">
        {projects.map(
          (project) =>
            activeProject === project.id && (
              <Project key={project.id} title={project.title} />
            )
        )}
      </div>
    </div>
  );
};

const Project = ({ title }) => (
  <div className="flex gap-40 ">
    <div className="w-1/2 ">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p>
        Crafted an innovative rental property management app, seamlessly
        integrating secure login, absence registration, and a tenant notice
        board. Elevating the resident experience with user-friendly design and
        efficient communication channels.
      </p>
      <p className=" mt-10 font-semibold">Business analysis / iOS / Android / QA / UI/UX Design</p>
      <div className=" flex gap-4 mt-8 ml-20">
          <Image src='/app.png' height={150} width={150} alt="img"/>
          <Image src='/gp.png' height={150} width={150} alt="img"/>
        </div>
    </div>
    <div className="w-1/2 ">
      <img src="/image 15.png" alt={title} />
    </div>
  </div>
);

export default ProjectsNavigation;
