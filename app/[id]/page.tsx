"use client";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { projectData } from "@/data";
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

export default function Portfolio({ params }: { params: { id: string } }) {
  const project: Project = projectData.filter((project) => project.id === params.id)[0];
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-16">
          <PortfolioCard key={project.id} project={project} />
      </div>
    </div>
  );
}
