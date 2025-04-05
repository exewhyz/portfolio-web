import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { data } from "@/constants/data";
import { TabsContent } from "../ui/tabs";
import { Mail, MapPin, Phone, User } from "lucide-react";
import Link from "next/link";
const ContactTab = () => {
  return (
    <TabsContent value="contact" className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" /> Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <Link
                  href={`mailto:${data.personalData.email}`}
                  className="font-medium hover:underline"
                >
                  {data.personalData.email}
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <Link
                  href={`tel:${data.personalData.phone}`}
                  className="font-medium hover:underline"
                >
                  {data.personalData.phone}
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">{data.personalData.address}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" /> References
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {data.references.map((ref, index) => (
                <div
                  key={index}
                  className="space-y-2 border-b pb-4 last:border-0 last:pb-0"
                >
                  <h3 className="font-semibold">{ref.name}</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <Link
                        href={`tel:${ref.phone}`}
                        className="hover:underline"
                      >
                        {ref.phone}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <Link
                        href={`mailto:${ref.email}`}
                        className="font-medium hover:underline"
                      >
                        {ref.email}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

export default ContactTab;
