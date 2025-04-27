import { TabsContent } from "../ui/tabs";
import { Project, ProjectCard } from "../project-card";
import { getProjects } from "@/sanity/lib/action";

const ProjectTab = async () => {
  const projects = await getProjects();
  return (
    <TabsContent value="projects" className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </TabsContent>
  );
};

export default ProjectTab;
