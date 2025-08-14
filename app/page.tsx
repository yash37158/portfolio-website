"use client"

import { useEffect } from "react"
import { GithubContributions } from "@/components/github-contributions"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackgroundAnimation } from "@/components/background-animation"
import { Achievements } from "@/components/achievements"
import { Experience } from "@/components/experience"
import { TwitterThreads } from "@/components/twitter-threads"
import { Blogs } from "@/components/blogs"

export default function Home() {
  // Add scroll animation observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      _observer: IntersectionObserver
    ) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          (entry.target as Element).classList.add("visible")
        }
      })
    }

    // Create observer for sections
    const sectionObserver = new IntersectionObserver(handleIntersect, observerOptions)

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("page-section")
      sectionObserver.observe(section)
    })

    // Observe staggered animation elements
    document.querySelectorAll(".stagger-animation").forEach((element) => {
      sectionObserver.observe(element)
    })

    return () => {
      sectionObserver.disconnect()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Blogs />
          <Achievements />
          <GithubContributions />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

