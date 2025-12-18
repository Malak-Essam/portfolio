import ProjectCard from "./ProjectCard";
import portfolioData from "@/data/portfolio.json";

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-24 container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                <div>
                    <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-xl">
                        A selection of my recent work in backend development, microservices, and AI integration.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
