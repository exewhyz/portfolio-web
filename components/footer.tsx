import SocialIcons from "./social-icons";

interface FooterProps {
  personalData: {
    name: string;
  };
  socialData: {
    links: Array<{
      title: string;
      url: string;
    }>;
  };
}
const Footer = async ({ personalData, socialData }: FooterProps) => {
  return (
    <footer className="border-t py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalData?.name}. All rights
          reserved.
        </p>
        <SocialIcons socialData={socialData?.links} />
      </div>
    </footer>
  );
};

export default Footer;
