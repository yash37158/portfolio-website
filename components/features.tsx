"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Layout, Layers, Smartphone, Terminal, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Modern Design",
    description: "Clean, minimalist aesthetics with attention to detail and user experience.",
    icon: <Layout className="h-10 w-10 text-emerald-400" />,
  },
  {
    title: "Terminal Typography",
    description: "Tech-forward text elements that evoke the feel of command line interfaces.",
    icon: <Terminal className="h-10 w-10 text-emerald-400" />,
  },
  {
    title: "3D Elements",
    description: "Subtle three-dimensional objects that create depth and visual interest.",
    icon: <Layers className="h-10 w-10 text-emerald-400" />,
  },
  {
    title: "Responsive Design",
    description: "Seamless experience across all devices from desktop to mobile.",
    icon: <Smartphone className="h-10 w-10 text-emerald-400" />,
  },
  {
    title: "Performance Optimized",
    description: "Lightning-fast load times and smooth interactions for the best user experience.",
    icon: <Zap className="h-10 w-10 text-emerald-400" />,
  },
  {
    title: "Clean Code",
    description: "Well-structured, maintainable codebase following best practices.",
    icon: <Code className="h-10 w-10 text-emerald-400" />,
  },
]

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combining cutting-edge technology with sleek design principles to create immersive digital experiences that
            stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800 h-full overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 transition-opacity duration-300"
                  style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

