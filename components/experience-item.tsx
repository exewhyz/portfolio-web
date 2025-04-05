import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Calendar, Briefcase, CheckCircle2 } from "lucide-react";
import LocationYearBadge from "./location-year-badge";

interface JobProps {
  location: string;
  position: string;
  company: string;
  startYear: number;
  present: boolean;
  endYear?: number;
  projects: string[];
  contributions: string[];
}

export function ExperienceItem({ job }: { job: JobProps }) {
  const {
    location,
    position,
    company,
    startYear,
    present,
    endYear,
    projects,
    contributions,
  } = job;

  return (
    <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Briefcase className="h-4 w-4 text-primary" />
              <CardTitle className="text-lg font-semibold">
                {position}
              </CardTitle>
            </div>
            <CardDescription className="flex items-center gap-2">
              <span className="font-medium">{company}</span>
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <LocationYearBadge
              location={location}
              startYear={startYear}
              endYear={endYear}
              present={present}
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm uppercase tracking-wider text-primary font-medium flex items-center gap-2">
            <span className="inline-block h-1 w-4 bg-primary rounded-full"></span>
            Projects
          </h4>
          <ul className="space-y-2">
            {projects.map((project, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm uppercase tracking-wider text-primary font-medium flex items-center gap-2">
            <span className="inline-block h-1 w-4 bg-primary rounded-full"></span>
            Key Contributions
          </h4>
          <ul className="space-y-2">
            {contributions.map((contribution, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
