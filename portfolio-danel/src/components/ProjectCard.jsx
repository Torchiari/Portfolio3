import PropTypes from "prop-types";

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes,
    onClick, 
    featured
}) => {
    return (
        <div 
            onClick={onClick}
            className={`
                relative p-4 rounded-2xl bg-zinc-800 transition-colors cursor-pointer
                ${classes || ''}
                ${featured 
                    ? 'ring-2 ring-yellow-500/50 bg-zinc-800/90 shadow-[0_0_20px_rgba(234,179,8,0.15)]' 
                    : 'hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5'
                }
            `}
        >
            {featured && (
                <div className="absolute top-3 right-3 bg-yellow-500 text-zinc-950 text-[10px] uppercase tracking-wide font-bold px-2 py-1 rounded flex items-center gap-1 z-10 shadow-lg pointer-events-none">
                    <span aria-hidden="true">⭐</span> Destacado
                </div>
            )}

            <figure className="img-box aspect-square rounded-lg mb-4">
                <img 
                    src={imgSrc} 
                    alt={title} 
                    loading="lazy"
                    className="img-cover" 
                />
            </figure>

            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">
                        {title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, key) => (
                            <span 
                                key={key}
                                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={`w-11 h-11 rounded-lg grid place-items-center shrink-0 ${featured ? 'bg-yellow-500 text-zinc-950' : 'bg-sky-400 text-zinc-950'}`}>
                    <span 
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        arrow_outward
                    </span>
                </div>
            </div>

            <a 
                href={projectLink} 
                target="_blank" 
                rel="noreferrer"
                className="absolute inset-0"
                onClick={(e) => e.preventDefault()} 
            >
                <span className="sr-only">Ver detalles de {title}</span>
            </a>
        </div>
    )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    featured: PropTypes.bool
}

export default ProjectCard;