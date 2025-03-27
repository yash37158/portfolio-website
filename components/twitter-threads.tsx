"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, MessageCircle, Repeat, Heart, ExternalLink, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Twitter thread data structure
interface Tweet {
  id: string
  content: string
  date: string
  likes: number
  retweets: number
  replies: number
  image?: string
  link: string
}

// Sample Twitter threads data
const twitterThreadsData: Tweet[] = [
  {
    id: "1",
    content:
      "Just published a new blog post on building responsive web applications with Next.js and Tailwind CSS. Check it out! #webdev #nextjs #tailwindcss",
    date: "April 15, 2024",
    likes: 42,
    retweets: 18,
    replies: 7,
    image: "/placeholder.svg?height=300&width=500",
    link: "https://x.com/YashSha49433608",
  },
  {
    id: "2",
    content:
      "Excited to announce that I'll be speaking at the upcoming Cloud Native Conference about service mesh technologies and how they can improve your microservices architecture! #kubernetes #servicemesh #cloudnative",
    date: "March 28, 2024",
    likes: 76,
    retweets: 24,
    replies: 12,
    link: "https://x.com/YashSha49433608",
  },
  {
    id: "3",
    content:
      "🧵 Thread on the importance of open source contributions:\n\n1. Builds your portfolio\n2. Improves collaboration skills\n3. Expands your network\n4. Deepens technical knowledge\n5. Gives back to the community\n\nWhat has been your experience with open source? #opensource #coding",
    date: "February 10, 2024",
    likes: 128,
    retweets: 45,
    replies: 23,
    link: "https://x.com/YashSha49433608",
  },
  {
    id: "4",
    content:
      "Just released a new open-source tool to help developers debug webhooks more efficiently. Hook Harbor is now available on GitHub! #opensource #webhooks #developers",
    date: "January 5, 2024",
    likes: 93,
    retweets: 31,
    replies: 15,
    image: "/placeholder.svg?height=300&width=500",
    link: "https://x.com/YashSha49433608",
  },
]

export function TwitterThreads() {
  const [selectedTweet, setSelectedTweet] = useState<Tweet | null>(null)

  return (
    <section id="twitter" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Twitter Threads</h2>
        <div className="w-20 h-1 bg-purple-500 mb-10"></div>

        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-gray-300 text-center">
            Check out my recent thoughts and discussions on Twitter. I regularly share insights about web development,
            cloud-native technologies, and open-source contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto stagger-animation">
          {twitterThreadsData.map((tweet) => (
            <Card
              key={tweet.id}
              className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-purple-500 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <X className="h-6 w-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Yash Sharma</h3>
                    <p className="text-gray-400 text-sm mb-2">@YashSha49433608</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-4">{tweet.content}</p>

                {tweet.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={tweet.image || "/placeholder.svg"}
                      alt="Tweet image"
                      width={500}
                      height={300}
                      className="w-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{tweet.date}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>{tweet.replies}</span>
                    </div>
                    <div className="flex items-center text-gray-400 hover:text-green-400 transition-colors">
                      <Repeat className="h-4 w-4 mr-1" />
                      <span>{tweet.retweets}</span>
                    </div>
                    <div className="flex items-center text-gray-400 hover:text-red-400 transition-colors">
                      <Heart className="h-4 w-4 mr-1" />
                      <span>{tweet.likes}</span>
                    </div>
                  </div>
                  <a
                    href={tweet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span>View</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://x.com/YashSha49433608"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors border border-gray-700 hover:border-cyan-500"
          >
            <X className="h-5 w-5 text-cyan-400" />
            <span>Follow me on Twitter</span>
          </a>
        </div>
      </div>
    </section>
  )
}

