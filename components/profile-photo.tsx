import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { data } from "@/constants/data";
import React from "react";

const ProfilePhoto = ({ className }: { className: string }) => {
  return (
    <Avatar className={cn("h-24 w-24 md:h-32 md:w-32", className)}>
      <AvatarImage
        src={data.personalData.profilePhotoUrl}
        alt={data.personalData.name}
      />
      <AvatarFallback>
        {data.personalData.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfilePhoto;
