"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "../projects/ProjectCard";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
  category: string;
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Sample projects data
  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with product management, cart functionality, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://example.com/demo",
      repoUrl: "https://github.com/example/project",
      category: "fullstack",
    },
    {
      id: "2",
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern web technologies.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://example.com/demo",
      repoUrl: "https://github.com/example/project",
      category: "frontend",
    },
    {
      id: "3",
      title: "Task Management API",
      description:
        "RESTful API for task management with authentication and authorization.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      technologies: ["Express.js", "PostgreSQL", "JWT"],
      demoUrl: "https://example.com/demo",
      repoUrl: "https://github.com/example/project",
      category: "backend",
    },
 
  
  ];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My recent Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across various domains of web development.
            Each project demonstrates different skills and technologies.
          </p>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

          

          
      </div>
    </section>
  );
}
