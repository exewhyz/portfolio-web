// components/experience-item.jsx
import { Badge } from "@/components/ui/badge";

interface JobProps {
  position: string;
  company: string;
  startYear: number;
  endYear?: number;
  projects: string[];
  contributions: string[];
}
export function ExperienceItem({ job }: { job: JobProps }) {
  const { position, company, startYear, endYear, projects, contributions } =
    job;

  return (
    <div className="space-y-3" id="experiences">
      <div>
        <h3 className="text-lg font-semibold">{position}</h3>
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">{company}</p>
          <Badge variant="outline">
            {startYear} - {endYear || "Present"}
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">Projects</h4>
        <ul className="list-disc pl-5 space-y-1">
          {projects.map((project, i) => (
            <li key={i}>{project}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">Key Contributions</h4>
        <ul className="list-disc pl-5 space-y-1">
          {contributions.map((contribution, i) => (
            <li key={i}>{contribution}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
