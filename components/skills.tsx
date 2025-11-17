"use client"

import { useState } from "react"
import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="h-10 w-10 text-blue-500" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-10 w-10 text-teal-500" />,
    skills: ["Node.js", "Express", "Python", "Django", "Ruby on Rails", "PHP", "Java", "Spring Boot"],
  },
  {
    category: "Database",
    icon: <Database className="h-10 w-10 text-green-500" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "Prisma", "GraphQL"],
  },
  {
    category: "Design",
    icon: <Palette className="h-10 w-10 text-pink-500" />,
    skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX Design", "Wireframing", "Prototyping"],
  },
  {
    category: "DevOps",
    icon: <Code className="h-10 w-10 text-yellow-500" />,
    skills: ["Git", "GitHub", "Docker", "Kubernetes", "CI/CD", "AWS", "Vercel", "Netlify"],
  },
  {
    category: "Other",
    icon: <Globe className="h-10 w-10 text-blue-500" />,
    skills: ["SEO", "Accessibility", "Performance Optimization", "Testing", "Agile", "Scrum", "Technical Writing"],
  },
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend")

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="w-20 h-1 bg-blue-500 mb-10"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {skillsData.map((item) => (
            <button
              key={item.category}
              className={`p-4 rounded-lg transition-all duration-300 ${
                activeCategory === item.category
                  ? "bg-gray-800 border-2 border-blue-500"
                  : "bg-gray-800/50 hover:bg-gray-800 border-2 border-transparent"
              }`}
              onClick={() => setActiveCategory(item.category)}
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <span className="mt-2 font-medium">{item.category}</span>
              </div>
            </button>
          ))}
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">{activeCategory} Skills</CardTitle>
            <CardDescription>
              Technologies and tools I use for {activeCategory.toLowerCase()} development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skillsData
                .find((item) => item.category === activeCategory)
                ?.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-blue-500/20 hover:border-blue-500 border border-gray-600 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

