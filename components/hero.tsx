"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const phrases = [
    "I build things for the web.",
    "I create modern web and cloud-native applications",
    "I design user experiences.",
    "I develop full-stack solutions.",
  ]

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length]
      const shouldDelete = isDeleting

      setText((prev) =>
        shouldDelete ? currentPhrase.substring(0, prev.length - 1) : currentPhrase.substring(0, prev.length + 1),
      )

      // Set typing speed based on state
      setTypingSpeed(isDeleting ? 50 : 100)

      // Handle phrase completion or deletion
      if (!isDeleting && text === currentPhrase) {
        // Delay before starting to delete
        setTypingSpeed(1500)
        setIsDeleting(true)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center sm:text-left px-4 sm:px-6 md:px-0">
          <div className="inline-block mb-2 px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            <p className="text-purple-400 font-mono text-sm">Hi, my name is</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Yash{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Sharma</span>
          </h1>

          <div className="h-16 md:h-20 mb-8 flex items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-300 leading-tight">
              {text}
              <span className="inline-block w-2 h-8 md:h-10 bg-purple-500 ml-1 animate-pulse"></span>
            </h2>
          </div>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto sm:mx-0">
            I'm a software developer specializing in building exceptional digital experiences. Currently, I'm focused on
            creating accessible, human-centered products.
          </p>

          <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-base px-6 py-6 h-auto rounded-xl shadow-lg shadow-purple-500/20 transition-all duration-300 hover:translate-y-[-2px]"
              asChild
            >
              <a href="https://github.com/yash37158" target="_blank" rel="noopener noreferrer">
                Check out my work
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 text-base px-6 py-6 h-auto rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
              asChild
            >
              <a href="mailto:yashsharma37158@gmail.com">Contact me</a>
            </Button>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500/10 text-base px-6 py-6 h-auto rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
              asChild
            >
              <a href="https://www.producthunt.com/@yash_sharma53" target="_blank" rel="noopener noreferrer">
                Product Hunt
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-2 bg-gray-800/50 rounded-full border border-gray-700">
          <ArrowDown className="text-purple-500" size={24} />
        </div>
      </div>
    </section>
  )
}

