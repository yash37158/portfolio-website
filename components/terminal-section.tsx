"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function TerminalSection() {
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState<string[]>([
    "Welcome to Tech.Modern Terminal",
    "Type 'help' to see available commands",
  ])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()

    if (!command.trim()) return

    // Add command to output
    setOutput((prev) => [...prev, `> ${command}`])

    // Process command
    const processedCommand = command.toLowerCase().trim()

    if (processedCommand === "help") {
      setOutput((prev) => [
        ...prev,
        "Available commands:",
        "- help: Show this help message",
        "- about: Learn about our company",
        "- services: View our services",
        "- contact: Get contact information",
        "- clear: Clear the terminal",
      ])
    } else if (processedCommand === "about") {
      setOutput((prev) => [
        ...prev,
        "Tech.Modern is a cutting-edge design and development studio.",
        "We specialize in creating immersive digital experiences that",
        "combine modern aesthetics with powerful technology.",
      ])
    } else if (processedCommand === "services") {
      setOutput((prev) => [
        ...prev,
        "Our Services:",
        "- Web Design & Development",
        "- 3D Interactive Experiences",
        "- UI/UX Design",
        "- Brand Identity",
        "- Digital Marketing",
      ])
    } else if (processedCommand === "contact") {
      setOutput((prev) => [
        ...prev,
        "Contact Information:",
        "Email: hello@tech.modern",
        "Phone: (123) 456-7890",
        "Address: 123 Innovation St, Tech City",
      ])
    } else if (processedCommand === "clear") {
      setOutput(["Terminal cleared", "Type 'help' to see available commands"])
    } else {
      setOutput((prev) => [...prev, `Command not found: ${command}. Type 'help' for available commands.`])
    }

    // Clear input
    setCommand("")
  }

  return (
    <section id="terminal" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Terminal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience our tech-forward approach with this interactive terminal. Try typing commands to learn more about
            us.
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-700 max-w-3xl mx-auto overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-sm text-gray-400">tech.modern ~ terminal</div>
          </div>
          <CardContent className="p-0">
            <div className="bg-black p-4 font-mono text-sm h-80 overflow-y-auto">
              {output.map((line, index) => (
                <div key={index} className={line.startsWith(">") ? "text-emerald-400 mt-2" : "text-gray-300"}>
                  {line}
                </div>
              ))}
              <form onSubmit={handleCommand} className="mt-2 flex items-center">
                <span className="text-emerald-400 mr-2">{">"}</span>
                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-white"
                  autoFocus
                />
              </form>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">Want to see what this terminal can do?</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["help", "about", "services", "contact"].map((cmd) => (
              <Button
                key={cmd}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
                onClick={() => {
                  setCommand(cmd)
                  setTimeout(() => {
                    const form = document.querySelector("form")
                    if (form) (form as HTMLFormElement).dispatchEvent(new Event("submit", { cancelable: true }))
                  }, 100)
                }}
              >
                {cmd}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

