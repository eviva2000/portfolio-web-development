import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Twitter,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  name?: string;
  title?: string;
  tagline?: string;
  imageUrl?: string;
  resumeUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export default function HeroSection({
  name = "Jane Doe",
  title = "Full Stack Developer",
  tagline = "Building elegant, responsive, and user-friendly web applications with modern technologies.",
  imageUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  resumeUrl = "#",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center py-20 px-4 md:px-8 lg:px-16 bg-[url(/bg-purple22.svg)] text-white bg-cover bg-center bg-norepeate">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 order-2 md:order-1">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {name}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              {title}
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-md">{tagline}</p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild>
              <Link href="#projects">View Projectws</Link>
            </Button>

            {/* <Button variant="outline" asChild>
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button> */}
          </div>

          <div className="flex items-center gap-4 pt-4">
            {socialLinks.github && (
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}

            {socialLinks.linkedin && (
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            )}

            {socialLinks.twitter && (
              <Link
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            )}
          </div>
        </div>

      
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          href="#skills"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  );
}
