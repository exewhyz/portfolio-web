import { data } from "@/constants/data";
import SocialIcons from "./social-icons";

const Footer = () => {
  return (
    <footer className="border-t py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {data.personalData.name}. All rights
          reserved.
        </p>
        <SocialIcons socialData={data.socialData} />
      </div>
    </footer>
  );
};

export default Footer;
