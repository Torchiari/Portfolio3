import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ButtonPrimary, ButtonOutline } from './Button';

const ProjectModal = ({ project, onClose }) => {
    
    // Cerrar con la tecla ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        // Bloquear el scroll del body cuando el modal está abierto
        document.body.style.overflow = 'hidden';
        
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/80 backdrop-blur-sm transition-opacity" onClick={onClose}>
            
            {/* Contenedor del Modal */}
            <div 
                className="bg-zinc-900 ring-1 ring-zinc-50/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()} // Evitar que click adentro cierre el modal
            >
                
                {/* Botón Cerrar */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-zinc-800/50 hover:bg-zinc-700 backdrop-blur-md rounded-full grid place-items-center text-zinc-50 transition-colors"
                >
                    <span className="material-symbols-rounded">close</span>
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Imagen Grande */}
                    <div className="relative h-64 md:h-full bg-zinc-800">
                        <img 
                            src={project.imgSrc} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r" />
                    </div>

                    {/* Contenido */}
                    <div className="p-6 md:p-10 flex flex-col h-full">
                        <h2 className="headline-2 mb-4">{project.title}</h2>
                        
                        <div className="mb-6">
                            <h4 className="text-zinc-100 font-medium mb-2">Sobre el proyecto</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-zinc-100 font-medium mb-3">Tecnologías utilizadas</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto flex flex-wrap gap-4">
                            {project.projectLink && (
                                <ButtonPrimary 
                                    label="Ver Demo" 
                                    icon="open_in_new" 
                                    href={project.projectLink} 
                                    target="_blank"
                                />
                            )}
                            
                            {project.repoLink && (
                                <ButtonOutline 
                                    label="Repositorio" 
                                    icon="code" 
                                    href={project.repoLink} 
                                    target="_blank"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProjectModal.propTypes = {
    project: PropTypes.object,
    onClose: PropTypes.func.isRequired
}

export default ProjectModal;