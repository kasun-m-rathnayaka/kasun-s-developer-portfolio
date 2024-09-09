import PortfolioCard from '@/components/ui/PortfolioCard'

type Project = {
  id: string;
  title: string;
  description: string;
  images: string[];
  keyFeatures: string[];
  technologies: string[];
  challenges: string;
  solutions: string;
  nextSteps: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    keyFeatures: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Payment integration",
      "Order tracking"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    challenges: "Implementing real-time inventory updates across multiple concurrent users.",
    solutions: "Utilized WebSockets for live inventory updates and implemented optimistic UI updates.",
    nextSteps: "Integrate AI-powered product recommendations and expand to mobile platforms.",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce"
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold text-center mb-12">My Project Portfolio</h1>
      <div className="max-w-4xl mx-auto space-y-16">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}