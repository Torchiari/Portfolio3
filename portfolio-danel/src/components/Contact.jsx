import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Eliminamos el sitemap ya que no se usará aquí

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Torchiari',
    icon: <FaGithub />,
    username: 'Torchiari'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/daneltorchiari/',
    icon: <FaLinkedinIn />,
    username: 'daneltorchiari'
  },
  {
    label: 'Email',
    href: 'mailto:danel.t@hotmail.com?subject=Consulta%20desde%20tu%20portfolio&body=Hola%20Danel%2C%20vi%20tu%20portfolio%20y%20me%20gustaría%20contactarte.',
    icon: <MdEmail />,
    username: 'danel.t@hotmail.com'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        
        {/* Contenedor centrado para el contenido de contacto */}
        <div className="max-w-3xl mx-auto text-center">
          
          <h2 className="headline-1 mb-8 mx-auto">
            Contactame
          </h2>
          
          <p className="text-zinc-400 text-lg mb-12 mx-auto max-w-[60ch]">
            ¿Tienes un proyecto en mente o una oportunidad laboral? 
            Estoy siempre dispuesto a escuchar y colaborar en nuevos desafíos. ¡Contáctame!
          </p>

          {/* Grid de tarjetas de redes sociales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
            {socials.map(({ label, href, icon, username }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                // Ajustamos las clases para que las tarjetas se vean bien centradas
                className="flex flex-col items-center p-6 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 ring-1 ring-inset ring-zinc-50/5 transition-all duration-300 group hover:scale-[1.02] text-center"
              >
                <div className="w-14 h-14 rounded-full bg-zinc-900 grid place-items-center text-2xl text-zinc-400 group-hover:text-sky-400 group-hover:bg-zinc-950 transition-colors ring-1 ring-zinc-50/10 mb-4">
                  {icon}
                </div>
                
                <p className="text-zinc-400 text-xs font-medium tracking-wider mb-2 uppercase">
                  {label}
                </p>
                
                {/* Ocultamos el username en móviles muy pequeños para que no rompa el diseño */}
                <p className="text-zinc-100 font-medium group-hover:text-sky-300 transition-colors text-sm truncate w-full px-2">
                  {username}
                </p>

                <span className="material-symbols-rounded text-zinc-500 group-hover:text-zinc-200 transition-colors mt-4">
                  arrow_outward
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;