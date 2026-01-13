import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import works from '../data/works'; 

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8">
                    Mis trabajos destacados
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
                    {works.map((project, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={project.imgSrc}
                            title={project.title}
                            tags={project.tags}
                            projectLink={project.projectLink}
                            // Pasamos la función para abrir el modal con este proyecto específico
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Renderizado condicional del Modal */}
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
};

export default Work;