import ProfilePhoto from "./profile-photo";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import SocialIcons from "./social-icons";
import {
  getPersonalData,
  getProfessionalData,
  getSkills,
  getSocialData,
} from "@/sanity/lib/action";

const Hero = async () => {
  const personalData = await getPersonalData();
  const professionalData = await getProfessionalData();
  const socialData = await getSocialData();
  const skills = await getSkills();
  return (
    <section className="relative rounded-xl overflow-hidden">
      {/* Background gradient for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 -z-10" />

      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 -z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smallGrid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="p-6 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Profile photo with subtle animation */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-full blur opacity-75 dark:opacity-90 animate-pulse"></div>
            <div className="relative">
              <ProfilePhoto
                personalData={personalData}
                className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-background shadow-xl"
              />
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left fadeIn">
            {/* Name and title */}
            <div>
              <p className="text-sm text-primary font-medium mb-1">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {personalData?.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {professionalData.designations
                  .filter(
                    (deg: { title: string; current: boolean }) => deg.current
                  )
                  .map((deg: { title: string; current: boolean }) => deg.title)
                  .join(" | ")}
              </p>
            </div>

            {/* Short bio */}
            <p className="max-w-2xl text-muted-foreground">
              Passionate software developer specializing in creating exceptional
              digital experiences. With expertise in modern web technologies and
              a focus on clean, maintainable code.
            </p>

            {/* Contact info with improved icons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <div className="flex items-center gap-2 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <Link
                  href={`mailto:${personalData.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalData.email}
                </Link>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <Link
                  href={`tel:${personalData.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalData.phone}
                </Link>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>{personalData.address}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 justify-center md:justify-start">
              <SocialIcons socialData={socialData.links} />
            </div>

            {/* Skills badges with improved styling */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map((skill: string) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 transition-all hover:bg-primary/10"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full font-medium">
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-medium"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
