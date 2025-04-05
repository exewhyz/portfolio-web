import { data } from "@/constants/data";
import { TabsContent } from "../ui/tabs";
import { ProjectCard } from "../project-card";

const ProjectTab = () => {
  return (
    <TabsContent value="projects" className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </TabsContent>
  );
};

export default ProjectTab;
