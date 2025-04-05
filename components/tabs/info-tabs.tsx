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
      <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-fit">
        {tabs.map((tab) => (
          <TabsTrigger key={tab} value={tab.toLowerCase()}>
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
