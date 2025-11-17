"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Info, Calendar, Users, Mic, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Badge data structure
interface Badge {
  id: string
  name: string
  image: string
  link: string
  description: string
  issuer: string
  date: string
}

// Community work data structure
interface CommunityWork {
  id: string
  title: string
  type: "bootcamp" | "hackathon" | "talk"
  description: string
  date: string
  location: string
  link?: string
  image?: string
}

// Sample badge data
const badgesData: Badge[] = [
  {
    id: "first-design",
    name: "First Design",
    image: "https://badges.layer5.io/assets/badges/first-design/first-design.png?height=224&width=224",
    link: "https://cloud.layer5.io/user/53ccd221-c66b-4815-93df-397013b0200a?tab=badges&badge=first-design",
    description: "Awarded for completing your first design contribution to an open-source project.",
    issuer: "Layer5",
    date: "January 2023",
  },
  {
    id: "Meshery",
    name: "Meshery",
    image: "https://badges.layer5.io/assets/badges/meshery/meshery.png?height=224&width=224",
    link: "https://cloud.layer5.io/user/53ccd221-c66b-4815-93df-397013b0200a?tab=badges&badge=meshery",
    description: "Awarded for consistent and impactful contributions to the Meshery project.",
    issuer: "Layer5",
    date: "October 2023",
  },
  {
    id: "continous-contributor",
    name: "Continous Contribution",
    image: "https://badges.layer5.io/assets/badges/continuous-contributor/continuous-contributor.png",
    link: "https://cloud.layer5.io/user/53ccd221-c66b-4815-93df-397013b0200a?tab=badges&badge=continuous-contributor",
    description: "Awarded to the community members who make consistent and impactful contributions for a long period of time in Layer5 projects",
    issuer: "Layer5",
    date: "November 2022",
  },
  {
    id: "Community",
    name: "Community",
    image: "https://badges.layer5.io/assets/badges/community/community.png",
    link: "https://cloud.layer5.io/user/53ccd221-c66b-4815-93df-397013b0200a?tab=badges&badge=community",
    description: "Recognized for community members who repeatedly engage in welcoming, encouraging, and supporting other Layer5 community members.",
    issuer: "Layer5",
    date: "March 2023",
  },

    {
    id: "first-share",
    name: "First Share",
    image: "https://badges.layer5.io/assets/badges/first-share/first-share.png",
    link: "https://cloud.layer5.io/user/53ccd221-c66b-4815-93df-397013b0200a?tab=badges&badge=first-share",
    description: "Recognized for upon first-time sharing one of your designs.",
    issuer: "Layer5",
    date: "March 2023",
  },

    {
    id: "Longevity-Legend",
    name: "Longevity Legend",
    image: "https://badges.layer5.io/assets/badges/longevity-legend/longevity-legend.png",
    link: "https://cloud.layer5.io/user/53ccd221-c66b-4815-93df-397013b0200a?tab=badges&badge=longevity-legend",
    description: "Awarded for long-term, sustained contributions to the project over the years.",
    issuer: "Layer5",
    date: "March 2023",
  },
]

// Sample community work data
const communityWorkData: CommunityWork[] = [
  {
    id: "web-dev-bootcamp",
    title: "Web Development Bootcamp",
    type: "bootcamp",
    description:
      "Led a 4-week intensive bootcamp teaching modern web development with React and Node.js to 30+ students.",
    date: "June 2022",
    location: "Amity University, Mumbai",
    link: "#",
    image: "/placeholder.svg?height=224&width=224",
  },
  {
    id: "hackathon-organizer",
    title: "TechHack",
    type: "hackathon",
    description:
      "Organized and mentored at a 48-hour hackathon with over 200 participants focused on solving local community challenges.",
    date: "September 2023",
    location: "Amity University, Mumbai",
    link: "https://www.amity.edu/mumbai/techhack2024/",
    image: "/placeholder.svg?height=224&width=224",
  },
  {
    id: "conference-talk",
    title: "MLSA: Introduction to Cloud Computing and Microsoft Azure",
    type: "talk",
    description:
      "Delivered a keynote presentation on Version Control system and best practices.",
    date: "July 2021",
    location: "Microsoft Teams",
    link: "https://www.linkedin.com/posts/yash-sharma-7b688a19b_hello-everyone-hope-you-are-keeping-well-activity-6855087424989609984-nz8X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7wH_oBZLNRckJmJ7fpuio79Bh4hkevYy8",
    image: "/placeholder.svg?height=224&width=224",
  },
  {
    id: "Cloud-Native Talk",
    title: "Getting Started with Open Source and Cloud-native Ecosystems ",
    type: "talk",
    description: "Conducted a workshop helping developers make their first contributions to open-source projects.",
    date: "Oct 2024",
    location: "Amity University, Mumbai",
    link: "https://www.linkedin.com/posts/drmanojdevare_amityuniversitymumbai-amityuniversity-mumbai-ugcPost-7249351155036676096-I6bv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7wH_oBZLNRckJmJ7fpuio79Bh4hkevYy8",
    image: "/placeholder.svg?height=224&width=224",
  },
]

export function Achievements() {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null)
  const [selectedCommunityWork, setSelectedCommunityWork] = useState<CommunityWork | null>(null)

  // Function to get icon based on community work type
  const getCommunityWorkIcon = (type: string) => {
    switch (type) {
      case "bootcamp":
        return <Users className="h-5 w-5 text-emerald-500" />
      case "hackathon":
        return <Award className="h-5 w-5 text-teal-500" />
      case "talk":
        return <Mic className="h-5 w-5 text-blue-500" />
      default:
        return <Info className="h-5 w-5" />
    }
  }

  return (
    <section id="achievements" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Achievements</h2>
        <div className="w-20 h-1 bg-blue-500 mb-10"></div>

        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-gray-300 text-center">
            Recognition for my contributions to open-source projects and the developer community. These achievements
            represent milestones in my journey as a developer and my commitment to collaborative software development
            and knowledge sharing.
          </p>
        </div>

        <Tabs defaultValue="badges" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800/70 border border-gray-700">
            <TabsTrigger
              value="badges"
              className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
            >
              Badges & Certifications
            </TabsTrigger>
            <TabsTrigger
              value="community"
              className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
            >
              Community Work
            </TabsTrigger>
          </TabsList>

          <TabsContent value="badges">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {badgesData.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center">
                  <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-blue-500 transition-all duration-300 w-full">
                    <CardContent className="p-6 flex flex-col items-center">
                      <div className="relative mb-4 group-hover:scale-105 transition-transform duration-300">
                        <a href={badge.link} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={badge.image || "/placeholder.svg"}
                            alt={badge.name}
                            width={224}
                            height={224}
                            className="rounded-lg"
                          />
                        </a>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                className="absolute top-2 right-2 bg-gray-900/80 p-1.5 rounded-full hover:bg-blue-500/80 transition-colors"
                                onClick={() => setSelectedBadge(badge)}
                              >
                                <Info className="h-4 w-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View badge details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <h3 className="text-lg font-bold text-center mb-1 text-blue-300">{badge.name}</h3>
                      <p className="text-sm text-gray-400 text-center mb-3">Issued by {badge.issuer}</p>
                      <a
                        href={badge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 text-sm flex items-center gap-1"
                      >
                        View Badge <ExternalLink className="h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityWorkData.map((work) => (
                <Card
                  key={work.id}
                  className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-blue-500 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gray-700/50">{getCommunityWorkIcon(work.type)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-bold mb-1 text-teal-400">{work.title}</h3>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  className="bg-gray-900/80 p-1.5 rounded-full hover:bg-blue-500/80 transition-colors"
                                  onClick={() => setSelectedCommunityWork(work)}
                                >
                                  <Info className="h-4 w-4" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View details</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <p className="text-sm text-gray-400">{work.date}</p>
                        </div>
                        <p className="text-gray-300 mb-3 line-clamp-2">{work.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm px-3 py-1 rounded-full bg-gray-700 text-gray-300">
                            {work.type.charAt(0).toUpperCase() + work.type.slice(1)}
                          </span>
                          {work.link && (
                            <a
                              href={work.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-400 text-sm flex items-center gap-1"
                            >
                              Learn more <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Badge Modal */}
        {selectedBadge && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">{selectedBadge.name}</h3>
                  <button onClick={() => setSelectedBadge(null)} className="text-gray-400 hover:text-white p-2">
                    ✕
                  </button>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={selectedBadge.image || "/placeholder.svg"}
                      alt={selectedBadge.name}
                      width={180}
                      height={180}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-4">{selectedBadge.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="text-gray-400">Issuer:</span> {selectedBadge.issuer}
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-400">Date Earned:</span> {selectedBadge.date}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <a
                    href={selectedBadge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  >
                    View Badge <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Community Work Modal */}
        {selectedCommunityWork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">{selectedCommunityWork.title}</h3>
                  <button onClick={() => setSelectedCommunityWork(null)} className="text-gray-400 hover:text-white p-2">
                    ✕
                  </button>
                </div>

                <div className="mb-6">
                  {selectedCommunityWork.image && (
                    <div className="mb-6">
                      <Image
                        src={selectedCommunityWork.image || "/placeholder.svg"}
                        alt={selectedCommunityWork.title}
                        width={600}
                        height={300}
                        className="rounded-lg w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gray-700/50">
                      {getCommunityWorkIcon(selectedCommunityWork.type)}
                    </div>
                    <div>
                      <span className="text-sm px-3 py-1 rounded-full bg-gray-700 text-gray-300">
                        {selectedCommunityWork.type.charAt(0).toUpperCase() + selectedCommunityWork.type.slice(1)}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{selectedCommunityWork.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-700/30 p-3 rounded-lg">
                      <p className="text-sm text-gray-400">Date</p>
                      <p className="font-medium">{selectedCommunityWork.date}</p>
                    </div>
                    <div className="bg-gray-700/30 p-3 rounded-lg">
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium">{selectedCommunityWork.location}</p>
                    </div>
                  </div>
                </div>

                {selectedCommunityWork.link && (
                  <div className="flex justify-end">
                    <a
                      href={selectedCommunityWork.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
                    >
                      Learn More <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

