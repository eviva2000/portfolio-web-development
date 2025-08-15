"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {  Github, Linkedin,Mail,} from "lucide-react";
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
  name = "Ella Arjomandi",
  title = "Web Developer",
  tagline = "Building elegant, responsive, and user-friendly web applications with modern technologies.",
  socialLinks = {
    github: "https://github.com/eviva2000",
    linkedin: "https://www.linkedin.com/in/elaheharjomandi/",
  },
}: HeroSectionProps) {
  const socialiconsClass='text-muted-foreground hover:text-yellow-500 transition-colors';
  return (
    <section className="relative min-h-screen w-full flex justify-center items-center py-20 px-4 md:px-8 lg:px-16  text-white ">
<video
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="/video/bg-video.mp4" 
    autoPlay
    muted
    loop
    playsInline
  />

      <div className="max-w-3xl w-full flex gap-12 items-center justify-center relative z-10 text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-16 ">
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

          <div className="flex flex-wrap justify-center gap-4 pt-2 text-black">
            <Button asChild variant={"outline"} size="lg" >
              <Link href="#projects">View Projects</Link>
            </Button>

          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            {socialLinks.github && (
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={socialiconsClass}
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
                className={socialiconsClass}

              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            )}
                <Link href="mailto:arjomandielaheh@gmail.com"
                className={socialiconsClass}
                >
                <Mail className="h-5 w-5"/>
              </Link>
        
          </div>
        </div>

      
      </div>

    </section>
  );
}
