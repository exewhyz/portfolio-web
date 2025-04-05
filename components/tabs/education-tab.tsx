import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Book, GraduationCap, MapPin } from "lucide-react";
import { data } from "@/constants/data";
import { TabsContent } from "../ui/tabs";
import { Badge } from "../ui/badge";

const EducationTab = () => {
  return (
    <TabsContent value="education" className="space-y-6 py-4">
      <Card className="overflow-hidden border-opacity-50 hover:shadow-md transition-all duration-300">
        <CardHeader className="bg-primary/5 border-b border-border">
          <CardTitle className="flex items-center gap-3 text-xl">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span>Academic Background</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-8 divide-y divide-border">
            {data.education.map((edu, index) => (
              <div
                key={index}
                className={`${
                  index === 0 ? "" : "pt-6"
                } pb-2 last:border-0 last:pb-0`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Book className="h-4 w-4 mr-2 text-primary/70" />
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2 opacity-70" />
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin className="h-4 w-4 mr-2 opacity-70" />
                      {edu.location}
                    </p>
                  </div>

                  <Badge
                    variant="outline"
                    className="rounded-full bg-accent/10 border-accent/30 self-start whitespace-nowrap ml-6 md:ml-0 mt-1"
                  >
                    {edu.startYear} - {edu.present ? "Present" : edu.endYear}
                  </Badge>
                </div>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-4 pl-6">
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                      Achievements
                    </h4>
                    <ul className="pl-4 space-y-1 text-sm">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default EducationTab;
