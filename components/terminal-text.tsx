"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TerminalTextProps {
  texts: string[]
  prefix?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayAfterText?: number
  className?: string
}

export function TerminalText({
  texts,
  prefix = ">",
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterText = 2000,
  className,
}: TerminalTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Typing effect
  useEffect(() => {
    const currentText = texts[currentIndex]

    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false)
        }, delayAfterText)
        return () => clearTimeout(timer)
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, deletingSpeed)
        return () => clearTimeout(timer)
      } else {
        setCurrentIndex((currentIndex + 1) % texts.length)
        setIsTyping(true)
      }
    }
  }, [displayText, isTyping, currentIndex, texts, typingSpeed, deletingSpeed, delayAfterText])

  return (
    <div className={cn("font-mono", className)}>
      <span className="text-gray-500">{prefix} </span>
      <span>{displayText}</span>
      <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
    </div>
  )
}

