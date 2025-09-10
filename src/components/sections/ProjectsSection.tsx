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
      title: "ReservationHub",
      description:
        "A hotel management dashboard built with React and Supabase. This application provides a comprehensive interface for managing hotel operations including bookings, cabins, guests, and settings.",
      image:
        "https://eyqyeuaguwojbsavaovr.supabase.co/storage/v1/object/public/cabin-images/dashboard2.png",
      technologies: ["Express.js", "PostgreSQL", "JWT"],
      demoUrl: "https://wild-oasis-staff-dashboard.vercel.app",
      repoUrl: "https://github.com/eviva2000/Wild-Oasis-staff-dashboard",
      category: "backend",
    },
    {
      id: "4",
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
