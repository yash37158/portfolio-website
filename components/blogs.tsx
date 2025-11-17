"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye, Calendar, Clock, User } from "lucide-react"

type BlogPost = {
  title: string
  summary?: string
  url: string
  image?: string
  views?: number
  publishedAt?: string
  readTime?: string
  category?: string
  author?: string
}

export function Blogs() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        setError(null)
        
        const res = await fetch("/api/blogs?limit=3", { 
          cache: "no-store",
          headers: {
            'Cache-Control': 'no-cache'
          }
        })
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        
        const data = await res.json()
        
        if (mounted) {
          if (data.error) {
            setError(data.error)
          } else if (Array.isArray(data?.posts)) {
            setPosts(data.posts)
          } else {
            setError('Invalid data format received')
          }
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch blog posts')
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  const shimmer = (
    <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <div className="h-6 w-3/4 bg-gray-700 animate-pulse rounded" />
        <div className="h-4 w-full bg-gray-700 animate-pulse rounded" />
        <div className="h-4 w-5/6 bg-gray-700 animate-pulse rounded" />
        <div className="flex items-center justify-between">
          <div className="h-4 w-24 bg-gray-700 animate-pulse rounded" />
          <div className="h-9 w-24 bg-gray-700 animate-pulse rounded" />
        </div>
      </CardContent>
    </Card>
  )

  const formatDate = (dateString?: string) => {
    if (!dateString) return null
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    } catch {
      return null
    }
  }

  const getCategoryColor = (category?: string) => {
    switch (category?.toLowerCase()) {
      case 'technology':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
      case 'design':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
      case 'life':
        return 'text-green-400 bg-green-400/10 border-green-400/20'
      case 'business':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/20'
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  }

  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest from Bytes by Yash</h2>
            <div className="w-20 h-1 bg-blue-500"></div>
          </div>
          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500/10" asChild>
            <a href="https://bytes-by-yash.vercel.app/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> View all posts
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            [0, 1, 2].map((i) => <div key={i}>{shimmer}</div>)
          ) : error ? (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-400 mb-4">Unable to load blog posts</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.reload()}
                className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
              >
                Try Again
              </Button>
            </div>
          ) : posts.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-400">No blog posts available at the moment</p>
            </div>
          ) : (
            posts.map((post, idx) => (
              <Card
                key={idx}
                className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-blue-500 transition-all duration-300"
              >
                <CardContent className="p-6">
                  {post.category && (
                    <div className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(post.category)} mb-3`}>
                      {post.category}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2 text-blue-400 line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.summary || ""}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400 flex items-center gap-4 flex-wrap">
                      {post.author && (
                        <span className="inline-flex items-center gap-1">
                          <User className="h-4 w-4" /> {post.author}
                        </span>
                      )}
                      {post.views != null && (
                        <span className="inline-flex items-center gap-1">
                          <Eye className="h-4 w-4" /> {post.views.toLocaleString()}
                        </span>
                      )}
                      {post.readTime && (
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-4 w-4" /> {post.readTime}
                        </span>
                      )}
                      {post.publishedAt && (
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.publishedAt)}
                        </span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-teal-500 text-teal-500 hover:bg-teal-500/10"
                      asChild
                    >
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Read
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  )
}