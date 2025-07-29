import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Herramienta de diseño'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'Interfaz de usuario'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interacción'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Base de datos'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'Interfaz de usuario'
  },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">

              <h2 className="headline-2">
                Herramientas esenciales que utilizo
              </h2>

              <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Descubra las herramientas y tecnologías que uso para crear sitios web y aplicaciones.
              </p>

              <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => 
                        (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                            />
                        ))
                }
              </div>

            </div>
         </section>

    )
}

export default Skill;