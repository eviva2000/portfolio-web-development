import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  Laptop,
  Server,
  Settings,
  Terminal,
  Wrench,
} from "lucide-react";

interface Skill {
  name: string;
  proficiency: number;
  icon: React.ReactNode;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  title?: string;
  description?: string;
  categories?: SkillCategory[];
}

const SkillsSection = ({
  title = "My Skills",
  description = "I specialize in modern web development technologies with expertise in both frontend and backend development.",
  categories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", proficiency: 90, icon: <Code className="h-5 w-5" /> },
        {
          name: "Next.js",
          proficiency: 85,
          icon: <Globe className="h-5 w-5" />,
        },
        {
          name: "TypeScript",
          proficiency: 80,
          icon: <Code className="h-5 w-5" />,
        },
        {
          name: "Tailwind CSS",
          proficiency: 95,
          icon: <Laptop className="h-5 w-5" />,
        },
        {
          name: "JavaScript",
          proficiency: 90,
          icon: <Code className="h-5 w-5" />,
        },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          name: "Node.js",
          proficiency: 85,
          icon: <Server className="h-5 w-5" />,
        },
        {
          name: "Express",
          proficiency: 80,
          icon: <Server className="h-5 w-5" />,
        },
        {
          name: "PostgreSQL",
          proficiency: 75,
          icon: <Database className="h-5 w-5" />,
        },
        {
          name: "MongoDB",
          proficiency: 70,
          icon: <Database className="h-5 w-5" />,
        },
        {
          name: "GraphQL",
          proficiency: 65,
          icon: <Database className="h-5 w-5" />,
        },
      ],
    },
    {
      name: "Tools",
      skills: [
        {
          name: "Git",
          proficiency: 90,
          icon: <Terminal className="h-5 w-5" />,
        },
        {
          name: "Docker",
          proficiency: 70,
          icon: <Wrench className="h-5 w-5" />,
        },
        {
          name: "CI/CD",
          proficiency: 75,
          icon: <Settings className="h-5 w-5" />,
        },
        {
          name: "Jest",
          proficiency: 80,
          icon: <Terminal className="h-5 w-5" />,
        },
        {
          name: "Webpack",
          proficiency: 65,
          icon: <Wrench className="h-5 w-5" />,
        },
      ],
    },
  ],
}: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <Tabs
          defaultValue={categories[0].name}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 mb-8 w-full">
            {categories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name}
              className="space-y-6"
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {skill.icon}
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <Badge variant="outline">{skill.proficiency}%</Badge>
                        </div>
                        <Progress value={skill.proficiency} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
