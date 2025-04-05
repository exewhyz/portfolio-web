"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  githubUrl: string;
  startDate: Date | string;
  endDate: Date | string;
  images?: string[]; // Optional image for the project
}

export function ProjectCard({ project }: { project: ProjectProps }) {
  const {
    title,
    description,
    technologies,
    url,
    githubUrl,
    startDate,
    endDate,
    images,
  } = project;

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300border-opacity-50 hover:border-primary/50">
      {images && images.length > 0 && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      )}

      <CardHeader
        className={`${
          images && images.length > 0 && images[0] ? "-mt-8 relative z-10" : ""
        }`}
      >
        <div className="flex justify-between items-start mb-1">
          <CardTitle className="text-xl font-bold leading-tight">
            {title}
          </CardTitle>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>
              {formatDate(startDate)} -{" "}
              {endDate ? formatDate(endDate) : "Present"}
            </span>
          </div>
        </div>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between gap-3 border-t pt-4">
        <Button variant="outline" size="sm" className="rounded-full" asChild>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Source
          </Link>
        </Button>
        <Button
          size="sm"
          className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
          asChild
        >
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
