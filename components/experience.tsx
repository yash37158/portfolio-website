"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, ChevronRight, ExternalLink, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Experience data structure
interface Experience {
  id: string
  role: string
  company: string
  logo: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
  achievements: string[]
  skills: string[]
  link?: string
}

// Sample experience data
const experienceData: Experience[] = [
  {
    id: "layer5",
    role: "Community Member and Meshmate",
    company: "Layer 5",
    logo: "https://meshery.io/assets/images/logos/meshery-logo.png?height=80&width=80",
    location: "Remote, In",
    startDate: "Jan 2022",
    endDate: "Present",
    current: true,
    description:
      "Leading the frontend development team in building modern, responsive web applications using React, Next.js, and TypeScript.",
    achievements: [
      "Redesigned the company's main product dashboard, improving user engagement by 35%",
      "Implemented a component library that reduced development time by 40%",
      "Mentored 5 junior developers, helping them improve their coding skills and best practices",
      "Optimized application performance, reducing load time by 60%",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    link: "#",
  },
  {
    id: "layer5-contributor",
    role: "Contributor",
    company: "Layer 5",
    logo: "https://meshery.io/assets/images/logos/meshery-logo.png?height=80&width=80",
    location: "Remote",
    startDate: "Mar 2020",
    endDate: "Dec 2021",
    current: false,
    description:
      "Worked on developing and maintaining multiple client-facing web applications with a focus on performance and accessibility.",
    achievements: [
      "Built 12+ responsive web applications for clients across various industries",
      "Reduced bundle size by 45% through code splitting and lazy loading",
      "Implemented automated testing that caught 30% more bugs before production",
      "Collaborated with designers to improve UI/UX across all projects",
    ],
    skills: ["JavaScript", "React", "CSS/SCSS", "Jest", "Webpack"],
    link: "#",
  },
  {
    id: "stige",
    role: "Software Engineer Intern",
    company: "Stige",
    logo: "https://i.postimg.cc/Pf2tHkxQ/image.png?height=80&width=80",
    location: "Remote, In",
    startDate: "Dec 2021",
    endDate: "Jan 2022",
    current: false,
    description:
      "Assisted in the development of the company's main product, gaining hands-on experience with modern web technologies.",
    achievements: [
      "Developed and maintained multiple features for the company's main product",
      "Created a documentation system that improved onboarding for new developers",
      "Participated in code reviews and contributed to improving coding standards",
    ],
    skills: ["HTML/CSS", "JavaScript", "React", "Git", "Agile"],
    link: "#",
  },
  {
    id: "official-india",
    role: "Support Manager",
    company: "The Official India",
    logo: "https://i.postimg.cc/T1Yfbtkb/image.png?height=80&width=80",
    location: "Remote, In",
    startDate: "Jun 2020",
    endDate: "Sep 2020",
    current: false,
    description: "Assisted in the Maintaing of Chat Bot System.",
    achievements: [
      "Maintained multiple features for the company's main product",
      "Created a documentation system that improved onboarding for new developers",
      "Participated in code reviews and contributed to improving coding standards",
    ],
    skills: ["HTML/CSS", "JavaScript", "React", "Git", "Agile"],
    link: "#",
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(experienceData[0].id)

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900/50">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start mb-10">
          <div className="inline-block mb-2 px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            <p className="text-purple-400 font-mono text-sm">Where I've Worked</p>
          </div>
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-purple-500 mb-2"></div>
        </div>

        <div className="max-w-5xl mx-auto stagger-animation">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Custom Tabs Navigation */}
            <div className="md:w-64 flex-shrink-0">
              <div className="flex flex-row md:flex-col h-auto space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible">
                {experienceData.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(exp.id)}
                    className={`w-full text-left px-4 py-3 border rounded-md transition-all duration-300 
                      ${
                        activeTab === exp.id
                          ? "bg-purple-500/20 border-purple-500 text-purple-400"
                          : "border-gray-700 bg-gray-800/50 hover:bg-gray-800/80 hover:border-purple-400/50 text-gray-300"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700 flex-shrink-0 border border-gray-600">
                        <Image
                          src={exp.logo || "/placeholder.svg"}
                          alt={exp.company}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{exp.company}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1">
              {experienceData.map((exp) => (
                <div key={exp.id} className={`${activeTab === exp.id ? "block" : "hidden"}`}>
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-lg shadow-black/20">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                        <div className="hidden md:block w-16 h-16 rounded-lg overflow-hidden bg-gray-700 flex-shrink-0 border border-gray-600">
                          <Image
                            src={exp.logo || "/placeholder.svg"}
                            alt={exp.company}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-1 text-purple-500">{exp.role}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                            <div className="flex items-center gap-1 text-purple-400">
                              <span>{exp.company}</span>
                              {exp.link && (
                                <a
                                  href={exp.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-purple-400 hover:text-purple-300"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              )}
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1 text-gray-400 text-sm">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-gray-400 text-sm">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-6">{exp.description}</p>

                          <h4 className="text-lg font-semibold mb-3 text-purple-300">Key Achievements</h4>
                          <ul className="space-y-2 mb-6">
                            {exp.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <ChevronRight className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{achievement}</span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="text-lg font-semibold mb-3 text-purple-200">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-700 rounded-full text-sm border border-gray-600 hover:border-purple-500 transition-colors duration-300"
                              >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                                  {skill}
                                </span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

