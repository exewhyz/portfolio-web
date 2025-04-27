import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Book, Briefcase } from "lucide-react";
import { Badge } from "../ui/badge";
import { TabsContent } from "../ui/tabs";
import { ExperienceItem, JobProps } from "../experience-item";
import {
  getProfessionalExperience,
  getTrainingExperience,
} from "@/sanity/lib/action";

const ExperienceTab = async () => {
  const trainingExperience = await getTrainingExperience();
  const professionalExperience = await getProfessionalExperience();
  return (
    <TabsContent value="experience" className="space-y-6 py-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" /> Professional Experience{" "}
            <span className="text-sm text-muted-foreground">
              ({professionalExperience?.yearsOfExperience} Years)
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {professionalExperience?.experiences?.map(
              (job: JobProps, index: number) => (
                <ExperienceItem key={index} job={job} />
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
              ({trainingExperience?.yearsOfExperience} Years)
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trainingExperience?.trainings?.map(
              (
                training: {
                  course: string;
                  institution: string;
                  duration: string;
                },
                index: number
              ) => (
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
