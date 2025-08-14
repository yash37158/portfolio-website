"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Track scroll position and update active section
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "experience",
      "skills",
      "projects",
      "achievements",
      "github",
      "blogs",
      "contact",
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset to trigger slightly before reaching the section

      // Find the current section in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check on mount
    handleScroll()

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            Yash<span className="text-white">.Portfolio</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Experience", "Skills", "Projects", "Achievements", "GitHub", "Blog", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-purple-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-500 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-purple-500"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
            <a href="https://drive.google.com/file/d/10FDMFNK4GxEXV8d4XKwprwMCA8UEtOa0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            </Button>
          </nav>

          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Projects",
                "Achievements",
                "GitHub",
                "Blog",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase())
                    setIsMenuOpen(false)
                  }}
                  className={`py-2 text-left transition-colors duration-200 hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? "text-purple-500" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10 w-full">
                Resume
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

