import React from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Dribbble,
  Figma,
  Globe,
  Link as LinkIcon,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

// Define types for props and social data
interface SocialItem {
  title: string;
  url: string;
}

interface SocialIconsProps {
  socialData: SocialItem[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ socialData }) => {
  // Icon mapping object with TypeScript type
  const iconComponents: Record<string, LucideIcon> = {
    github: Github,
    twitter: Twitter,
    x: Twitter, // For the rebranded Twitter
    linkedin: Linkedin,
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
    email: Mail,
    mail: Mail,
    dribbble: Dribbble,
    figma: Figma,
    website: Globe,
    portfolio: Globe,
    blog: Globe,
    link: LinkIcon,
    // Add more mappings as needed
  };

  return (
    <div className="flex gap-4">
      {socialData.map((social) => {
        // Convert title to lowercase for case-insensitive matching
        const iconKey = social.title.toLowerCase();
        // Get the appropriate icon component or default to Globe
        const IconComponent = iconComponents[iconKey] || Globe;

        return (
          <Link
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.title} Profile`}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <IconComponent className="h-5 w-5" />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
