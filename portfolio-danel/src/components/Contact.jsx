const sitemap = [
  {
    label: 'Inicio',
    href: '#home'
  },
  {
    label: 'Sobre mi',
    href: '#about'
  },
  // {
  //   label: 'Work',
  //   href: '#work'
  // },
  // {
  //   label: 'Reviews',
  //   href: '#reviews'
  // },
  // {
  //   label: 'Contact me',
  //   href: '#contact'
  // }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Torchiari'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/daneltorchiari/'
  },
   {
    label: 'Gmail',
    href: 'mailto:danel.t@hotmail.com?subject=Consulta%20desde%20tu%20portfolio&body=Hola%20Danel%2C%20vi%20tu%20portfolio%20y%20me%20gustaría%20contactarte.'
  }
  // {
  //   label: 'Twitter X',
  //   href: 'https://x.com/codewithsadee_'
  // },
  // {
  //   label: 'Instagram',
  //   href: 'https://www.instagram.com/daneltorchiari/'
  // },
  // {
  //   label: 'CodePen',
  //   href: 'https://codepen.io/codewithsadee'
  // }
];


const Contact = () => {
  return (
    <section id="contact" className="section">
      <footer >
        <div className="container">

          <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
              <h2 className="headline-1">
                Contactame!

              </h2>


            </div>

            <div className="grid grid-cols-2 gap-4 lg:pl-20">

              <div>
                <p className="mb-2 text-4xl font-medium">Redes</p>

                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="text-lg block text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>

                <p className="mb-2 text-4xl font-medium">Secciones</p>

                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a href={href} target="_blank" className="block text-lg text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a>
                    </li>

                  ))}
                </ul>

              </div>

            </div>

          </div>

          <div className="flex items-center justify-between pt-10 mb-8">
            <a href="" className="">
              <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
            </a>

            <p className="text-zinc-500 text-sm">&copy; 2025 <span className="text-zinc-200">Danel Torchiari</span></p>
          </div>

        </div>
      </footer>
    </section>
  );
};

export default Contact;