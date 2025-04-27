import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TabsContent } from "../ui/tabs";
import { Briefcase, Mail, MapPin, Phone, User } from "lucide-react";
import Link from "next/link";
import { getPersonalData, getReferences } from "@/sanity/lib/action";

const ContactTab = async () => {
  const personalData = await getPersonalData();
  const references = await getReferences();
  return (
    <TabsContent value="contact" className="space-y-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden border-opacity-50 hover:shadow-md transition-all duration-300">
          <CardHeader className="bg-primary/5 border-b border-border">
            <CardTitle className="flex items-center gap-3 text-xl">
              <User className="h-5 w-5 text-primary" /> Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="flex items-start gap-4 group hover:bg-accent/5 p-2 rounded-lg transition-colors">
              <Mail className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground font-medium">
                  Email
                </p>
                <Link
                  href={`mailto:${personalData.email}`}
                  className="font-medium hover:text-primary hover:underline transition-colors"
                >
                  {personalData.email}
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4 group hover:bg-accent/5 p-2 rounded-lg transition-colors">
              <Phone className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground font-medium">
                  Phone
                </p>
                <Link
                  href={`tel:${personalData.phone}`}
                  className="font-medium hover:text-primary hover:underline transition-colors"
                >
                  {personalData.phone}
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4 group hover:bg-accent/5 p-2 rounded-lg transition-colors">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground font-medium">
                  Address
                </p>
                <p className="font-medium">{personalData.address}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-opacity-50 hover:shadow-md transition-all duration-300">
          <CardHeader className="bg-primary/5 border-b border-border">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Briefcase className="h-5 w-5 text-primary" /> References
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6 divide-y divide-border">
              {references.map(
                (
                  ref: { name: string; phone: number; email: string },
                  index: number
                ) => (
                  <div
                    key={index}
                    className={`${index > 0 ? "pt-6" : ""} space-y-3 group hover:bg-accent/5 p-2 rounded-lg transition-colors`}
                  >
                    <h3 className="font-semibold flex items-center gap-2">
                      <User className="h-4 w-4 text-primary/70" />
                      {ref.name}
                    </h3>
                    <div className="space-y-2 text-sm pl-6">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary/60" />
                        <Link
                          href={`tel:${ref.phone}`}
                          className="hover:text-primary hover:underline transition-colors"
                        >
                          {ref.phone}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary/60" />
                        <Link
                          href={`mailto:${ref.email}`}
                          className="hover:text-primary hover:underline transition-colors"
                        >
                          {ref.email}
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

export default ContactTab;
