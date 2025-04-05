import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutTab from "./about-tab";
import ExperienceTab from "./experience-tabs";
import Educationtab from "./education-tab";
import ProjectTab from "./project-tab";
import ContactTab from "./contact-tab";
import { tabs } from "@/constants/data";

const InfoTabs = () => {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="bg-primary/5 grid grid-cols-2 md:grid-cols-5 w-full h-fit border border-border">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab.toLowerCase()}
            className="border-r-border last:border-none"
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* About Tab */}
      <AboutTab />

      {/* Experience Tab */}
      <ExperienceTab />

      {/* Education Tab */}
      <Educationtab />

      {/* Projects Tab */}
      <ProjectTab />

      {/* Contact Tab */}
      <ContactTab />
    </Tabs>
  );
};

export default InfoTabs;
