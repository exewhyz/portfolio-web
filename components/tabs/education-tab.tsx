import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Book } from "lucide-react";
import { data } from "@/constants/data";
import { TabsContent } from "../ui/tabs";
import LocationYearBadge from "../location-year-badge";

const Educationtab = () => {
  return (
    <TabsContent value="education" className="space-y-6 py-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" /> Academic Background
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div
                key={index}
                className="flex justify-between items-start border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{`${edu.institution}`}</p>
                </div>
                <LocationYearBadge
                  location={edu.location}
                  startYear={edu.startYear}
                  endYear={edu.endYear}
                  present={edu.present}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Educationtab;
