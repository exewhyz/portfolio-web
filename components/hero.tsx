import React from "react";
import ProfilePhoto from "./profile-photo";
import { data } from "@/constants/data";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <section className="relative rounded-xl bg-muted/30 p-6 md:p-8 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <ProfilePhoto />

        <div className="space-y-4 text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              {data.personalData.name}
            </h1>
            <p className="text-xl text-muted-foreground mt-1">
              {data.professionalData.designations
                .filter((deg) => deg.current)
                .map((deg) => deg.title)
                .join(" | ")}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <Link
                href={`mailto:${data.personalData.email}`}
                className="hover:underline"
              >
                {data.personalData.email}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <Link
                href={`tel:${data.personalData.phone}`}
                className="hover:underline"
              >
                {data.personalData.phone}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{data.personalData.address}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {data.skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
