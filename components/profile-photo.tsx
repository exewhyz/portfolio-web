import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const ProfilePhoto = ({
  className,
  personalData,
}: {
  className: string;
  personalData: { name: string; profilePhoto: string };
}) => {
  return (
    <Avatar className={cn("h-24 w-24 md:h-32 md:w-32", className)}>
      <AvatarImage
        src={urlFor(personalData?.profilePhoto).format("webp").url()}
        alt={personalData.name}
      />
      <AvatarFallback className="font-bold text-xl rounded-full border-2 border-background">
        {personalData.name
          .split(" ")
          .map((n: string) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfilePhoto;
