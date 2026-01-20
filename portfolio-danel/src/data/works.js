const works = [
    {
    imgSrc: '/images/uniformar-preview.png',
    title: 'Uniformar',
    tags: ['Full Stack','Tailwind CSS', 'Next.js', 'NestJS'],
    projectLink: 'https://uniformar.ar',
    repoLink: 'https://github.com/Torchiari/Uniform.ar',
    description: 'Plataforma B2B de catálogo y cotización de indumentaria laboral. Desarrollé un "Diseñador Interactivo" que permite a los usuarios personalizar prendas en tiempo real: seleccionando modelos, variantes de color y superponiendo logotipos corporativos. Esta funcionalidad se integra con un backend robusto en NestJS que procesa los archivos y gestiona el envío automatizado de solicitudes de presupuesto detalladas vía email. El frontend en Next.js ofrece una experiencia de usuario (UX) intuitiva, facilitando la navegación por el catálogo y la comunicación directa con la empresa.',
    technologies: [
        'Next.js 16',
        'React',
        'TypeScript',
        'TailwindCSS',
        'NestJS',
        'Node.js',
        'Resend API',
        'Lucide UI'
    ] 
  },
  {
    imgSrc: '/images/englishwithcami-preview.png',
    title: 'English with Cami',
    tags: ['React', 'Tailwind CSS', 'Google API'],
    projectLink: 'https://englishwithcami.vercel.app/',
    repoLink: 'https://github.com/Torchiari/englishwithcami',
    description: 'Plataforma educativa web diseñada para la promoción y gestión de clases de inglés personalizadas. El núcleo del proyecto es un sistema de agenda sincronizado en tiempo real mediante la API de Google Calendar, implementado con FullCalendar. Esto permite a los estudiantes visualizar la disponibilidad exacta de la profesora y los horarios libres para agendar sesiones según su nivel y modalidad. La interfaz, construida con React y TailwindCSS v4, ofrece una navegación fluida entre los diferentes cursos y propuestas educativas.',
    technologies: [
        'React',
        'Vite',
        'TypeScript',
        'TailwindCSS v4',
        'Google Calendar API',
        'FullCalendar',
        'Radix UI',
        'React Router'
    ]
  },
  {
    imgSrc: '/images/iconnect.png', 
    title: 'iConnect - E-commerce Full Stack',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    projectLink: 'https://proyecto4-zeta.vercel.app',
    repoLink: 'https://github.com/Torchiari/Proyecto4',
    description: 'Plataforma de comercio electrónico Full Stack con arquitectura cliente-servidor separada. Cuenta con autenticación segura (JWT), carrito de compras dinámico, dashboard de usuario con historial de pedidos y base de datos relacional en la nube. Desarrollado con buenas prácticas y tipado estricto.',
    technologies: ['Next.js 15', 'React', 'TypeScript', 'Node.js', 'Express', 'TypeORM', 'PostgreSQL (Supabase)', 'Tailwind CSS']
  },
{
    imgSrc: '/images/core-preview.png',
    title: 'Plataforma de Gestión de Gimnasios',
    tags: ['Full Stack', 'PostgreSQL', 'Mobile First', 'Payments'],
    projectLink: 'https://core-lake-theta.vercel.app/home',
    repoLink: 'https://github.com/Torchiari/core',
    featured: true, 
    description: 'Mi proyecto más ambicioso y destacado hasta la fecha, al que mayor tiempo de desarrollo y cantidad de implementaciones he dedicado. Es una solución integral para gimnasios que cuenta con un sistema de roles (Admin, Entrenador, Socio) y bloqueo automático de contenido según el estado de la membresía. Integra pagos en tiempo real con Mercado Pago, gestión de rutinas personalizada, base de datos de ejercicios y perfiles de usuario con persistencia segura. Diseñado Mobile-First para ser el compañero ideal de entrenamiento.',
    technologies: [
      'Next.js 15', 
      'NestJS', 
      'TypeScript', 
      'PostgreSQL', 
      'TypeORM', 
      'Tailwind CSS', 
      'Mercado Pago', 
      'Cloudinary'
    ]
  },
];

export default works;