import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Book, Briefcase } from "lucide-react";
import { data } from "@/constants/data";
import { Badge } from "../ui/badge";
import { TabsContent } from "../ui/tabs";
import LocationYearBadge from "../location-year-badge";

const ExperienceTab = () => {
  return (
    <TabsContent value="experience" className="space-y-6 py-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" /> Professional Experience{" "}
            <span className="text-sm text-muted-foreground">
              ({data.workExperience.professionalExperience.yearsOfExperience}{" "}
              Years)
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {data.workExperience.professionalExperience.lists.map(
              (job, index) => (
                <div
                  key={index}
                  className="space-y-3 border-b pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{job.position}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-muted-foreground">{job.company}</p>
                      <LocationYearBadge
                        location={job.location}
                        startYear={job.startYear}
                        endYear={job.endYear}
                        present={job.present}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Projects</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.projects.map((project, i) => (
                        <li key={i}>{project}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Key Contributions</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.contributions.map((contribution, i) => (
                        <li key={i}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" /> Training Experience{" "}
            <span className="text-sm text-muted-foreground">
              ({data.workExperience.trainingExperience.yearsOfExperience} Years)
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.workExperience.trainingExperience.lists.map(
              (training, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-b pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <h3 className="font-semibold">{training.course}</h3>
                    <p className="text-muted-foreground">
                      {training.institution}
                    </p>
                  </div>
                  <Badge>{training.duration}</Badge>
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default ExperienceTab;
