"use client"

import { useEffect, useState } from "react"
import { Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for GitHub contributions
const generateMockContributions = () => {
  const contributions = []
  const today = new Date()

  // Generate data for the last 365 days
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)

    // Random contribution count (more likely to be 0-2, occasionally higher)
    let count = 0
    const rand = Math.random()

    if (rand < 0.3) {
      count = 0
    } else if (rand < 0.6) {
      count = Math.floor(Math.random() * 3) + 1
    } else if (rand < 0.85) {
      count = Math.floor(Math.random() * 5) + 3
    } else {
      count = Math.floor(Math.random() * 10) + 8
    }

    contributions.push({
      date: date.toISOString().split("T")[0],
      count,
    })
  }

  return contributions
}

export function GithubContributions() {
  // Initialize state variables with default values
  const [repos, setRepos] = useState([])
  const [contributions, setContributions] = useState([])
  const [stats, setStats] = useState({ totalContributions: 0, currentStreak: 0, longestStreak: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      setIsLoading(true)
      try {
        // Fetch user's repositories
        const reposResponse = await fetch("https://api.github.com/users/yash37158/repos?sort=updated&per_page=5")

        if (!reposResponse.ok) {
          throw new Error("Failed to fetch repositories")
        }

        const reposData = await reposResponse.json()

        // Process repositories to get stars and forks
        const processedRepos = reposData.map((repo) => ({
          name: repo.name,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          url: repo.html_url,
        }))

        setRepos(processedRepos)

        // For contributions data, we'll still use mock data for now
        // GitHub doesn't provide a public API for the contribution graph without authentication
        // In a production app, you would use the GitHub GraphQL API with authentication
        const mockData = generateMockContributions()
        setContributions(mockData)

        // Calculate stats based on mock data for now
        let total = 0
        let currentStreak = 0
        let longestStreak = 0
        let tempStreak = 0

        mockData.forEach((day) => {
          total += day.count

          if (day.count > 0) {
            tempStreak++
          } else {
            if (tempStreak > longestStreak) {
              longestStreak = tempStreak
            }
            tempStreak = 0
          }
        })

        // Check if the current streak is the longest
        if (tempStreak > longestStreak) {
          longestStreak = tempStreak
        }

        // Calculate current streak (from the end of the array)
        for (let i = mockData.length - 1; i >= 0; i--) {
          if (mockData[i].count > 0) {
            currentStreak++
          } else {
            break
          }
        }

        setStats({
          totalContributions: total,
          currentStreak,
          longestStreak,
        })

        setIsLoading(false)
      } catch (err) {
        console.error("Error fetching GitHub data:", err)
        setError(err.message)
        setIsLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  // Function to determine the color based on contribution count
  const getContributionColor = (count) => {
    if (count === 0) return "bg-gray-800"
    if (count <= 2) return "bg-blue-900"
    if (count <= 5) return "bg-blue-700"
    if (count <= 10) return "bg-blue-500"
    return "bg-blue-300"
  }

  return (
    <section id="github" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">GitHub Contributions</h2>
        <div className="w-20 h-1 bg-blue-500 mb-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5" /> Contribution Graph
                </CardTitle>
                <CardDescription>My GitHub activity over the past year</CardDescription>
                <CardDescription className="mt-2 text-xs text-gray-400">
                  Note: The contribution graph uses simulated data. For real contribution data, GitHub's GraphQL API
                  with authentication would be required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50 p-4">
                  {/* Month labels */}
                  <div className="flex justify-between px-2 mb-2 text-xs text-gray-400">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                      (month) => (
                        <span key={month}>{month}</span>
                      ),
                    )}
                  </div>

                  <div className="overflow-x-auto pb-4">
                    <div className="min-w-[800px]">
                      {/* Day labels */}
                      <div className="flex mb-1 ml-2">
                        <div className="grid grid-rows-7 gap-1 mr-2 text-xs text-gray-500">
                          <span className="h-3 flex items-center">Mon</span>
                          <span className="h-3 flex items-center">Wed</span>
                          <span className="h-3 flex items-center">Fri</span>
                        </div>

                        {/* Contribution grid */}
                        <div className="flex gap-1">
                          {Array.from({ length: 53 }).map((_, weekIndex) => (
                            <div key={weekIndex} className="grid grid-rows-7 gap-1">
                              {Array.from({ length: 7 }).map((_, dayIndex) => {
                                const contributionIndex = weekIndex * 7 + dayIndex
                                const contribution = contributions[contributionIndex]

                                return (
                                  <div
                                    key={dayIndex}
                                    className={`w-3 h-3 rounded-sm transition-all duration-200 hover:transform hover:scale-125 ${
                                      contribution ? getContributionColor(contribution.count) : "bg-gray-800"
                                    }`}
                                    title={
                                      contribution
                                        ? `${contribution.date}: ${contribution.count} contributions`
                                        : "No contributions"
                                    }
                                  >
                                    {/* Tooltip on hover */}
                                    <span className="sr-only">
                                      {contribution
                                        ? `${contribution.count} contributions on ${contribution.date}`
                                        : "No contributions"}
                                    </span>
                                  </div>
                                )
                              })}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="mt-6 flex items-center justify-end gap-2 text-xs">
                        <span className="text-gray-400">Less</span>
                        <div className="w-3 h-3 rounded-sm bg-gray-800 border border-gray-700"></div>
                        <div className="w-3 h-3 rounded-sm bg-blue-900 border border-blue-800"></div>
                        <div className="w-3 h-3 rounded-sm bg-blue-700 border border-blue-600"></div>
                        <div className="w-3 h-3 rounded-sm bg-blue-500 border border-blue-400"></div>
                        <div className="w-3 h-3 rounded-sm bg-blue-300 border border-blue-200"></div>
                        <span className="text-gray-400">More</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Summary stats */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Total contributions</span>
                      <span className="text-xl font-bold text-blue-500">{stats.totalContributions}</span>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Current streak</span>
                      <span className="text-xl font-bold text-blue-500">{stats.currentStreak} days</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Contribution Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                    <p className="text-3xl font-bold text-blue-500">{stats.totalContributions}</p>
                    <p className="text-sm text-gray-400">Total</p>
                  </div>
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                    <p className="text-3xl font-bold text-blue-500">{stats.currentStreak}</p>
                    <p className="text-sm text-gray-400">Current Streak</p>
                  </div>
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                    <p className="text-3xl font-bold text-blue-500">{stats.longestStreak}</p>
                    <p className="text-sm text-gray-400">Longest Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Top Repositories</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex justify-center items-center h-40">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : error ? (
                  <div className="p-4 bg-red-500/20 rounded-lg text-center">
                    <p className="text-red-400">Error loading GitHub data: {error}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {repos.map((repo) => (
                      <a
                        key={repo.name}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                      >
                        <span className="font-medium">{repo.name}</span>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {repo.stars}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {repo.forks}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

