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

  const projects: Project[] = [
    {
      id: "1",
      title: "A boutique hotel website",
      description:
        "A modern, full-stack web application for a fictional luxury cabin hotel built with Next.js 15. Guests can browse cabins, check availability, and manage their reservations with a seamless user experience.",
      image:
        "https://eyqyeuaguwojbsavaovr.supabase.co/storage/v1/object/public/cabin-images/cabin-008.jpg",
      technologies: ["Nextjs", "Supabase", "NextAuth", "Vercel"],
      demoUrl: "https://the-wild-oasis-customer-website-seven.vercel.app",
      repoUrl: "https://github.com/eviva2000/the-wild-oasis-customer-website",
      category: "fullstack",
    },
    {
      id: "2",
      title: "Beauty product landing page",
      description:
        "A responsive website built with modern web technologies designed to showcase products while reflecting the brand’s identity and style.",
      image:
        "https://eyqyeuaguwojbsavaovr.supabase.co/storage/v1/object/public/cabin-images/minimal-sandwall.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://nordicbeauty.vercel.app/",
      repoUrl: "https://github.com/eviva2000/Nordicbeauty",
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
            Explore my recent work across various domains of digital experience.
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
