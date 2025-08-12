import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing key features and technologies used in development.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  demoUrl = "#",
  repoUrl = "#",
  featured = false,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-card h-full flex flex-col">
      <div className="relative">
        {featured && (
          <Badge className="absolute top-2 right-2 z-10" variant="secondary">
            Featured
          </Badge>
        )}
        <AspectRatio ratio={16 / 9}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </AspectRatio>
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-2 gap-2">
        {demoUrl && (
          <Button variant="default" size="sm" className="flex-1" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        )}
        {repoUrl && (
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
