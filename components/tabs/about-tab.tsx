import { data } from "@/constants/data";
import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, BookOpen, Coffee, Languages, User } from "lucide-react";
import { TabsContent } from "../ui/tabs";

const AboutTab = () => {
  
  return (
    <TabsContent value="about" className="space-y-8 py-6">
      <Card className="overflow-hidden border-opacity-50 hover:shadow-md transition-all duration-300">
        <CardHeader className="bg-primary/5 border-b border-border">
          <CardTitle className="flex items-center gap-3 text-xl">
            <User className="h-5 w-5 text-primary" /> 
            <span>Professional Profile</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed">
            {data.professionalData.about}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden border-opacity-50 hover:shadow-md transition-all duration-300">
          <CardHeader className="bg-primary/5 border-b border-border">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Award className="h-5 w-5 text-primary" /> 
              <span>Certifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-4 divide-y divide-border">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className={`${index === 0 ? 'pb-3' : 'py-3'} last:pb-0`}
                >
                  <h3 className="font-semibold text-base group flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-primary/70" />
                    {cert.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mt-2 pl-6">
                    <span>{cert.institution}</span>
                    <Badge variant="outline" className="rounded-full bg-accent/20 border-accent/30">
                      {cert.year}
                    </Badge>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-opacity-50 hover:shadow-md transition-all duration-300">
          <CardHeader className="bg-primary/5 border-b border-border">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Languages className="h-5 w-5 text-primary" /> 
              <span>Languages & Interests</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <Languages className="h-4 w-4 mr-2 text-primary/70" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2 pl-6">
                {data.languages.map((language) => (
                  <Badge 
                    key={language} 
                    variant="secondary"
                    className="px-3 py-1 rounded-full bg-primary/10 hover:bg-primary/15 transition-colors"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-primary/70" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2 pl-6">
                {data.interests.map((interest) => (
                  <Badge 
                    key={interest} 
                    variant="outline"
                    className="px-3 py-1 rounded-full border-accent/30 hover:bg-accent/10 transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <Coffee className="h-4 w-4 mr-2 text-primary/70" />
                Hobbies
              </h3>
              <div className="flex flex-wrap gap-2 pl-6">
                {data.hobbies.map((hobby) => (
                  <Badge 
                    key={hobby} 
                    variant="outline"
                    className="px-3 py-1 rounded-full border-accent/30 hover:bg-accent/10 transition-colors"
                  >
                    {hobby}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

export default AboutTab;