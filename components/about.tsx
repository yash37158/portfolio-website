import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-1">About Me</h2>
        <div className="w-20 h-1 bg-purple-500 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center stagger-animation">
          <div>
            <p className="text-gray-300 mb-4">
              Hello! I'm Yash Sharma a CS student from Amity University, Mumbai. a Tech Enthusiast, constantly growing
              and sharing knowledge with the world, this is what I truly believe. world of technology has always
              fascinated me since my childhood.
            </p>
            <p className="text-gray-300 mb-4">
              My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes —
              turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="text-gray-300 mb-4">
              Fast-forward to today, and I've had the privilege of working for an Open Source project as Meshmate and
              Community Memeber at Layer5, an extensible, self-service engineering plaform for the collaborative
              management of cloud and cloud native infrastructure. My main focus these days is building accessible,
              inclusive products and digital experiences.
            </p>
            <p className="text-gray-300">Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4 text-sm">
              {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "GraphQL"].map((tech) => (
                <li key={tech} className="flex items-center text-gray-300">
                  <span className="text-purple-500 mr-2">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-gray-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yash-pixar-oFNG2r8fmxEf2c3Rp17RMJsRYG2mSQ.jpeg"
                alt="Yash Sharma - Developer"
                width={500}
                height={500}
                className="object-cover hover:scale-105 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

