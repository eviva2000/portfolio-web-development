import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {   Eye, ChevronUp, ChevronDownCircle, ChevronDown } from "lucide-react";
import { FiGithub } from "react-icons/fi"

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  project:{
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;}
}

const ProjectCard = ({
project
}: ProjectCardProps) => {
  const {
    id,
    title,
    description,
    image,
    technologies,
    demoUrl,
    repoUrl,
    featured = false,
  } = project;

  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };
  const handleClick=()=>{
    console.log('he')
  }

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
        <Button
    variant="ghost"
    size="sm"
    onClick={toggleDetails}
    className="w-full justify-start text-muted-foreground hover:bg-transparent hover:text-foreground"
  >
    {/* {isDetailsOpen ? (
      <>
        <ChevronUp className="h-4 w-4 mr-2" /> Hide Details
      </>
    ) : (
      <>
        <ChevronDown className="h-4 w-4 mr-2" /> Show Details
      </>
    )} */}
  </Button>
      
    <div   className={`
      flex flex-wrap gap-2 mt-4 transition-all duration-300
      ${isDetailsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
    `}>
      {technologies.map((tech, index) => (
        <Badge key={index} variant="outline">
          {tech}
        </Badge>
      ))}
    </div>

      </CardContent>

      <CardFooter className={`flex pt-2 gap-2 ${id==='3' ? 'justify-center' : 'justify-between'}`}>
         {id==='3'? <Button variant="default" size="sm" className="flex-1" onClick={handleClick} >Few samples</Button>:
         <> <Button variant="default" size="sm" className="flex-1" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        
       
          <Button variant="default" size="sm" className="flex-1" asChild>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <FiGithub className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
          </>
        }
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
