"use client";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { useEffect } from "react";

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
};

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    keyFeatures: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Payment integration",
      "Order tracking",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    challenges:
      "Implementing real-time inventory updates across multiple concurrent users.",
    solutions:
      "Utilized WebSockets for live inventory updates and implemented optimistic UI updates.",
    nextSteps:
      "Integrate AI-powered product recommendations and expand to mobile platforms.",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "2",
    title: "B-commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management.",
    images: [
      "1.png",
      "2.png",
      "3.png"
    ],
    keyFeatures: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Payment integration",
      "Order tracking",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    challenges:
      "Implementing real-time inventory updates across multiple concurrent users.",
    solutions:
      "Utilized WebSockets for live inventory updates and implemented optimistic UI updates.",
    nextSteps:
      "Integrate AI-powered product recommendations and expand to mobile platforms.",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
  },
];

export default function Portfolio({ params }: { params: { id: string } }) {
  const project: Project = projects.filter((project) => project.id === params.id)[0];
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-16">
          <PortfolioCard key={project.id} project={project} />
      </div>
    </div>
  );
}
