import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { EmblaOptionsType } from "embla-carousel";
import ProjectCarousel from "./ImageCarousal";

interface Project {
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

function KeyFeaturesCard({ features }: { features: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Features</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ChallengesAndSolutionsCard({
  challenges,
  solutions,
}: {
  challenges: string;
  solutions: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Challenges and Solutions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Challenge:</h4>
            <p>{challenges}</p>
          </div>
          <div>
            <h4 className="font-semibold">Solution:</h4>
            <p>{solutions}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const PortfolioCard = ({ project }: { project: Project }) => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <Card className="overflow-hidden">
        <ProjectCarousel slides={SLIDES} options={OPTIONS} images={project.images}/>
        <CardHeader>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <CardTitle className="text-2xl">{project.title}</CardTitle>
            <div className="flex space-x-2">
              {project.liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <KeyFeaturesCard features={project.keyFeatures} />
        {/* <ChallengesAndSolutionsCard
          challenges={project.challenges}
          solutions={project.solutions}
        /> */}
      </div>

      {/* <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{project.nextSteps}</p>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default PortfolioCard;
