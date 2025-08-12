"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projectsData = [
  {
    title: "Meshify",
    description:
      "A comprehensive service mesh analytical platform designed to monitor, manage and secure their microservices. Service mesh generates a large amount of data that can be analyzed to identify patterns, trends, and performance issues. ",
    image: "/images/meshify.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "RBAC", "react-redux", "Golang", "Istio", "Linkerd"],
    githubLink: "https://github.com/yash37158/meshify",
    liveLink: null,
  },
  {
    title: "Engineering Blog",
    description:
      "EngBlog Hub is a platform for developers, curating top engineering blogs in one place. Stay updated, enhance skills, and explore trends in web development, AI, cloud computing, and DevOps. Your central hub for insights and innovation.",
    image: "/images/engblogs.png",
    tags: ["Next.js", "APIs", "Vite"],
    liveLink: "https://fastidious-strudel-32d8c7.netlify.app/",
    githubLink: "#",
  },
  {
    title: "Hook Harbor",
    description:
      "A Webhook Debugger, to test, debug, and monitor your webhooks with our powerful real-time debugger tool",
    image: "/images/webhook-debugger.png",
    tags: ["Next", "Node.js", "TypeScript", "Tailwind"],
    liveLink: "https://hook-harbor.lovable.app/",
    githubLink: "https://github.com/yash37158/hook-harbor",
  },
  {
    title: ">_IaCGPT",
    description:
      "A full-featured Transform natural language into production-ready infrastructure code. Support for Terraform, Kubernetes, Docker, and more.",
    image: "/images/iacgpt.png",
    tags: ["Next.js", "Vite", "ShadCn", "gemini-2.0-flash", "Typescript", "Tailwind"],
    liveLink: "https://ai-cloud-architect.netlify.app/",
    githubLink: "https://github.com/yash37158/ai-cloud-architect",
  },
  {
    title: "AutoRideEDA - NextGen Autonomous Vehicle booking platform",
    description:
      "Event-driven autonomous taxi fleet simulation backend built with microservices architecture, Kafka, and Neon PostgreSQL.",
    image: "/images/autorideeda.png",
    tags: ["React", "Mapbox", "Kafka", "Neon PostgreSQL", "Microservices", "Event-driven", "Digital Ocean"],
    githubLink: "https://github.com/yash37158/AutoRide-EDA",
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="w-20 h-1 bg-purple-500 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-purple-500 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button
                  className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  onClick={() => setSelectedProject(project)}
                >
                  <Maximize2 className="text-white" size={32} />
                </button>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Live
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
                <div className="mb-6">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={800}
                    height={600}
                    className="w-full rounded-lg"
                  />
                </div>
                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {selectedProject.liveLink && (
                    <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                      <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Live Site
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubLink && (
                    <Button variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10" asChild>
                      <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

