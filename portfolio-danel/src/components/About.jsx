import React from 'react'

const aboutItems = [
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 10
  }
];

const About = () => {
    return (
        <section id="about" className="section">

            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Soy un desarrollador Full Stack con enfoque en frontend y estudiante de Desarrollo de Software de Buenos Aires, Argentina. Apasionado por la tecnología y el código limpio, estoy en constante búsqueda de proyectos desafiantes que me empujen a salir de mi zona de confort y expandir mis conocimientos.

Me considero una persona organizada, resolutiva y proactiva, con fuerte atención al detalle y compromiso por el trabajo bien hecho. Siempre estoy dispuesto a aprender, crecer y colaborar en equipos que busquen construir soluciones eficientes e innovadoras.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {/* {
                            aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        } */}
                        <img src="/images/logo.svg" alt="Logo" width={30} height={30} className="ml-auto md:w-[70px] md:h-[70px] " />

                    </div>
                </div>

            </div>
        </section>
    )
}

export default About