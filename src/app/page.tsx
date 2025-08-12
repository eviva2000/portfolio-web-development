import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        name="Jane Doe"
        title="Full Stack Developer"
        tagline="Building beautiful, functional web experiences with modern technologies"
        imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
      />

      {/* Skills Section */}
      <SkillsSection
        skills={[
          {
            category: "Frontend",
            items: [
              { name: "React", proficiency: 90 },
              { name: "Next.js", proficiency: 85 },
              { name: "TypeScript", proficiency: 80 },
              { name: "Tailwind CSS", proficiency: 95 },
            ],
          },
          {
            category: "Backend",
            items: [
              { name: "Node.js", proficiency: 85 },
              { name: "Express", proficiency: 80 },
              { name: "PostgreSQL", proficiency: 75 },
              { name: "MongoDB", proficiency: 70 },
            ],
          },
          {
            category: "Tools & Others",
            items: [
              { name: "Git", proficiency: 90 },
              { name: "Docker", proficiency: 75 },
              { name: "AWS", proficiency: 70 },
              { name: "Figma", proficiency: 80 },
            ],
          },
        ]}
      />

      {/* Projects Section */}
      <ProjectsSection
        projects={[
          {
            id: "1",
            title: "E-Commerce Platform",
            description:
              "A full-featured online store with product listings, cart functionality, and secure checkout.",
            thumbnail:
              "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            demoUrl: "https://example.com/demo1",
            repoUrl: "https://github.com/username/project1",
            featured: true,
          },
          {
            id: "2",
            title: "Task Management App",
            description:
              "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
            thumbnail:
              "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
            demoUrl: "https://example.com/demo2",
            repoUrl: "https://github.com/username/project2",
            featured: true,
          },
          {
            id: "3",
            title: "Weather Dashboard",
            description:
              "Real-time weather information with interactive maps and forecast data visualization.",
            thumbnail:
              "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
            technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
            demoUrl: "https://example.com/demo3",
            repoUrl: "https://github.com/username/project3",
            featured: false,
          },
          {
            id: "4",
            title: "Social Media Dashboard",
            description:
              "Analytics platform for tracking engagement across multiple social media channels.",
            thumbnail:
              "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
            technologies: ["Vue.js", "Express", "D3.js", "OAuth"],
            demoUrl: "https://example.com/demo4",
            repoUrl: "https://github.com/username/project4",
            featured: false,
          },
          {
            id: "5",
            title: "Recipe Finder App",
            description:
              "Search and discover recipes based on available ingredients with filtering options.",
            thumbnail:
              "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
            technologies: ["React Native", "Firebase", "Expo", "Recipe API"],
            demoUrl: "https://example.com/demo5",
            repoUrl: "https://github.com/username/project5",
            featured: true,
          },
          {
            id: "6",
            title: "Portfolio Website",
            description:
              "Professional portfolio website showcasing projects and skills (this website).",
            thumbnail:
              "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
            technologies: [
              "Next.js",
              "Tailwind CSS",
              "Framer Motion",
              "Vercel",
            ],
            demoUrl: "https://example.com/demo6",
            repoUrl: "https://github.com/username/project6",
            featured: false,
          },
        ]}
      />

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                alt="Jane Doe working"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="text-lg">
                I'm a passionate full stack developer with over 5 years of
                experience creating modern web applications. My journey in web
                development began with a curiosity about how websites work and
                evolved into a career building solutions that solve real
                problems.
              </p>
              <p className="text-lg">
                I specialize in React and Next.js for frontend development,
                paired with Node.js backends and various database technologies.
                I'm committed to writing clean, maintainable code and creating
                intuitive user experiences.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me hiking, reading tech blogs,
                or experimenting with new web technologies. I'm always open to
                new opportunities and collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href="mailto:jane.doe@example.com"
                    className="hover:underline"
                  >
                    jane.doe@example.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(123) 456-7890</span>
                </p>
              </div>

              <h3 className="text-xl font-semibold pt-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>

              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t bg-muted/30 text-center">
        <p>© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
      </footer>
    </main>
  );
}
