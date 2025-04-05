import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { data } from "@/constants/data";

const ProfilePhoto = () => {
  return (
    <Avatar className="h-24 w-24 md:h-32 md:w-32">
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
